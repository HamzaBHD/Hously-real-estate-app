import { ChangeEvent, Dispatch, ReactNode, SetStateAction } from 'react'
import { IconType } from 'react-icons'

export type UserObj = {
  _id: string
  username: string
  fullName: string
  email: string
  profilePicture: string
  createdAt: string
  phoneNumber?: string
  country?: string
  city?: string
  bio?: string
  background?: string
  facts?: string[]
  destinations?: string[]
  links?: string[]
}

export interface UserProfileObj extends UserObj {
  reservations: UserReservation[]
  savedProperties: PropertyType[]
  properties: PropertyType[]
}
export interface UserDetails {
  fullName: string
  country: string
  city: string
  phoneNumber: string
  bio: string
  background: string
  fact1: string
  fact2: string
  fact3: string
  destination1: string
  destination2: string
  destination3: string
  link1: string
  link2: string
  link3: string
}

export type DetailsState = {
  propertyType: string
  listingType: string
  title: string
  description: string
  address: string
  country: string
  city: string
  state: string
  postalCode: string
  propertySpace: string
  bedrooms: { bedroom: number; bedroomType: string }[]
  bathrooms: { bathroom: number; bathroomType: string }[]
  beds: { bed: number; bedType: string }[]
  features: string[]
  rules: string[]
  guestsLimit: string
  quietHours: string
  checkIn: string
  checkOut: string
  price: string
  cleaningFee: string
  securityFee: string
}

export interface ListingsDetails extends DetailsState {
  images: string[]
}

export interface ListingsObj extends DetailsState {
  images: string[]
  _id: string
}
export interface PropertyType extends ListingsObj {
  owner: UserObj | string
  reviews: ReviewObj[]
  reservations: UserReservation[]
}

export interface DetailsStateErrors
  extends Omit<
    DetailsState,
    'bedrooms' | 'bathrooms' | 'beds' | 'rules' | 'features'
  > {
  bedrooms: string
  bathrooms: string
  beds: string
  features: string
  rules: string
  images: string
}

export interface InputErrors {
  [key: string]: string | { [key: string]: string }
}
export type bedroomObj = {
  bedroom: number
  bedroomType: string
}
export type BathroomObj = {
  bathroom: number
  bathroomType: string
}
export type BedObj = {
  bed: number
  bedType: string
}
export type ObjType<Type> = {
  [Property in keyof Type]: Type[Property]
}

export type ArrType = ObjType<BedObj | bedroomObj | BathroomObj>[]

export type ObjectKey = keyof (bedroomObj | BathroomObj | BedObj)

export interface MainInformationPropType {
  details: DetailsState
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  detailsErrors: DetailsStateErrors
}

export interface ImagesUploaderType {
  error: string
  isEdit: boolean
  images: string[]
  setImages: Dispatch<SetStateAction<string[]>>
  clearImagesError: () => void
}

export interface LocationPropType extends MainInformationPropType {
  setDetails: Dispatch<SetStateAction<DetailsState>>
  setErrors: Dispatch<SetStateAction<DetailsStateErrors>>
}

export interface RulesPropType extends MainInformationPropType {
  handleRules: (rule: string) => void
}

export interface PricingPropType extends MainInformationPropType {}

export interface ReviewObj {
  _id: string
  reviewer: UserObj
  reviewerType: string
  reviewRange: string
  reviewContent: string
  createdAt: string
  updatedAt: string
}

export interface ReviewType {
  reviewerType: string
  reviewRange: string
  reviewContent: string
}

export interface ReportType {
  reportReason: string
  reportDescription: string
}

export interface ReservationsType {
  from: Date
  to: Date
}

export interface UserReservation {
  _id: string
  property: PropertyType
  reserver: UserObj | string
  guests: number
  from: string
  to: string
}
export interface ReservationType {
  guestsLimit: number
  pricePerNight: string
  securityFee: string
  cleaningFee: string
  propertyId: string
  propertyReservations: UserReservation[]
  arrOfDates?: ReservationsType[]
}
export interface PropertyLocationType {
  address: string
  country: string
  city: string
  state: string
  postalCode: string
}

export interface ReservationButtonsType {
  reserve: boolean
  availability: boolean
  pending: boolean
  lastReservation: UserReservation | undefined
  isPropertyOwner: boolean
  toggleReserve: () => void
  handleReservation: () => void
  toggleAvailability: () => void
}

export interface ReservationDetailsType {
  price: string
  nights: number
  cleaningFee: string
  securityFee: string
  reservationTotal: number
}

export interface ReserveDateSelectionType {
  selectedSlot: string
  setSelectedSlot: (slot: string) => void
  selectDate: Pick<UserReservation, 'from' | 'to'>
  error: string
}

export interface ReservationGuestsType {
  numberOfGuests: number
  reduceGuests: () => void
  addGuests: () => void
}

export interface ReservationContainerType {
  readThis: boolean
  setReadThis: Dispatch<SetStateAction<boolean>>
  clearReservation: () => void
  children: ReactNode
}

export type ChoiceType = {
  id: string
  choice: string
  desc: string
}
export type ChoicesType = ChoiceType[]

export type DetailsSelectionProps = {
  title: string
  listItems: ArrType
  setDetails: Dispatch<SetStateAction<DetailsState>>
  setDetailsErrors: Dispatch<SetStateAction<DetailsStateErrors>>
  error?: string
}

export interface InputPropsType {
  name: string
  value: string
  className: string
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  max?: number
  placeholder?: string
  label?: string
  type?: string
  message?: string
  error?: string
  children?: ReactNode
  letterCounter?: number
}

export interface TextAreaPropsType
  extends Omit<InputPropsType, 'placeholder' | 'children' | 'type'> {}

export type ChoiceKeys = 'bedrooms' | 'beds' | 'bathrooms'

export interface CustomSelectionPropType {
  label: string
  listItems: string[]
  selectedValue: string
  getValue: (value: string) => void
  className?: string
  Icon?: IconType
  error?: string
}

export interface CustomRangePropType
  extends Omit<CustomSelectionPropType, 'listItems'> {}

export type SearchObjTypes = {
  property: string | null
  type: string | null
  region: string | null
  min: string | null
  max: string | null
}

export type ProfileImageUploadType = {
  oldImage: string
  setProfileImage: Dispatch<SetStateAction<string>>
}

export type PersonalInfoPropType = {
  details: UserDetails
  errors: UserDetails
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export type UserLocationType = {
  details: UserDetails
  setUserDetails: Dispatch<SetStateAction<UserDetails>>
}

export interface CountryObjType {
  countryName: string
  countryCode: string
  continent: string
}

export interface CityObjType {
  cityName: string
  cityRegion: string
}

export interface ServerObjType {
  success: boolean
  message: string
}
