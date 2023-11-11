import { NextRequest, NextResponse } from 'next/server'
import { listingSchema } from 'utils/validations/validations'
import { connectToDb } from 'utils/connectToDb'
import { uploadImage } from 'utils/cloudinary'
import { serverSession } from 'utils/getUser'
import { reformDate } from 'utils/reformDate'
import Property from 'models/property'
import User from 'models/user'

export const POST = async (req: NextRequest) => {
  const { body, images } = await req.json()
  const user = await serverSession()
  try {
    const result = listingSchema.safeParse({ ...body, images })

    if (!result.success) {
      return NextResponse.json({ message: 'Please provide some valid inputs' })
    }

    let imagesArr: string[] = []

    for (let i = 0; i < images.length; i++) {
      const secure_url = await uploadImage(
        images[i],
        'properties/' + body.title + '-' + reformDate(new Date().toString()),
      )
      imagesArr.push(secure_url!)
    }

    await connectToDb()

    const property = await Property.create({
      ...body,
      images: imagesArr,
      owner: user?.user.id,
    })
    await User.findByIdAndUpdate(user?.user.id, {
      $addToSet: { properties: property._id },
    })

    return NextResponse.json({
      success: true,
      message: 'Your property has been successfully saved!',
      id: property._id,
    })
  } catch (err) {
    console.error(err)
  }

  return NextResponse.json({
    message: 'Your property has been successfully saved!',
  })
}
