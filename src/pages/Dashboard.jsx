import React from 'react'
import CustomSearch from '../utils/CustomSearch'
import CustomButton from '../utils/CustomButton'
import CustomTextField from '../utils/CustomTextfield'
import CustomDropdown from '../utils/CustomDropdown'


const Dashboard = () => {
  return (
    <div>Dashboard

<CustomSearch/>
<CustomButton >Add Now</CustomButton>
<CustomTextField/>
<CustomDropdown></CustomDropdown>
    </div>
  )
}

export default Dashboard