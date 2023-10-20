import { Flex, Text } from 'native-base'
import React from 'react'
import PopupComponent from '../animations/PopupComponent'
import Translator from '../hoc/Translator'
import { strings } from '../../utils/strings'

const Footer = () => {
  return (
    <Flex>
        <PopupComponent>
            <Translator color={"muted.500"} text={strings.footerText} />
            <Translator color={"muted.400"} text={{
                ar:"صنع هذا التطبيق من قبل اسماعيل الخرشاني",
                fr:"Cette application à été crée par Esmail Khorchani",
                en:"This app was made by Esmail Khorchani"
            }} />
        </PopupComponent>
    </Flex>
  )
}

export default Footer
