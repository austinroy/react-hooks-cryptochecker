import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const countryOptions = [
  { key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' },
  { key: 'ax', value: 'ax', flag: 'ax', text: 'Aland Islands' },

]

const SelectDropdown = () => (
  <Dropdown
    placeholder='Select Country'
    fluid
    search
    selection
    options={countryOptions}
  />
)

export default SelectDropdown