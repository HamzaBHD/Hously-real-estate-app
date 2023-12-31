'use client'
import PropertiesPage from '../screens/PropertiesPage'
import { PropertyType } from '@/types/types'
import { useSearchQueries } from 'hooks/useSearchQueries'
import { filterProperties } from 'utils/filterProperties'
import { useLocations } from 'hooks/useLocations'

const SearchPage = ({
  properties,
  savedProperties,
}: {
  properties: PropertyType[]
  savedProperties: string[]
}) => {
  const { searchQueries } = useSearchQueries()
  const { countries } = useLocations()
  const filteredProperties = filterProperties(
    searchQueries,
    properties,
    countries,
  )

  return (
    <>
      <h1 className="p-4 pb-2 text-lg font-medium md:px-6 md:pt-6 lg:text-2xl">
        Found {filteredProperties.length}
        {filteredProperties.length === 1 ? ' result ' : ' results '} for your
        search
      </h1>
      <PropertiesPage
        properties={filteredProperties}
        savedProperties={savedProperties}
      />
    </>
  )
}

export default SearchPage
