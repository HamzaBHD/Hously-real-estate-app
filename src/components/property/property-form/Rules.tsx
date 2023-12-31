import Container from '@/components/layouts/Container'
import SelectionList from './SelectionList'
import CustomInput from '@/components/ui/CustomInput'
import { rules } from 'data/data'
import { RulesPropType } from '@/types/types'

const Rules = ({
  handleRules,
  details,
  handleChange,
  detailsErrors,
}: RulesPropType) => {
  return (
    <>
      <Container
        title="General rules"
        type="normal"
        error={detailsErrors.rules}
      >
        <SelectionList
          arr={details.rules}
          arrOfItems={rules}
          handleClick={handleRules}
        />
      </Container>

      <Container title="Specific rules" type="normal">
        <div className="sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Guests limit"
            value={details.guestsLimit}
            name="guestsLimit"
            type="text"
            handleChange={handleChange}
            error={detailsErrors.guestsLimit}
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Quiet hours"
            value={details.quietHours}
            name="quietHours"
            type="text"
            handleChange={handleChange}
            error={detailsErrors.quietHours}
            message="E.g. 10 PM - 08 AM"
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Check-in"
            value={details.checkIn}
            name="checkIn"
            type="text"
            handleChange={handleChange}
            error={detailsErrors.checkIn}
            message="E.g. 10 PM"
          />

          <CustomInput
            className="relative mb-4 sm:my-0"
            label="Check-out"
            value={details.checkOut}
            name="checkOut"
            type="text"
            handleChange={handleChange}
            error={detailsErrors.checkOut}
            message="E.g. 08 AM"
          />
        </div>
      </Container>
    </>
  )
}

export default Rules
