import React from 'react'
import { Grid } from '@material-ui/core'
import cardsConfig from '../../../../config/infoBoxConfig'
import { ICardInfo } from '../../../../models'
import InfoBox from '../../../../components/InfoBox/InfoBox'

const FooterInfoBoxes = () => {
  return (
    <div className="info-footer">
      <Grid container spacing={3}>
        {cardsConfig.map((card: ICardInfo, index: number) => {
          return (
            <Grid item md={3} xs={6} key={index}>
              <InfoBox data={card} />
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default FooterInfoBoxes

