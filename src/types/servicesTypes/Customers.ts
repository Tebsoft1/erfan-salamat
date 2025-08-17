export type ServiceItemType = {
  id: number
  medicalServicesTypesId: number
  typeName: string
  title: string
  servicePrice: number
  servicePrice2: number
  servicePrice3: number
  imageFile: string
  servicePackage: boolean
  displayInApp: boolean
  nameInApp: string
  isActive: boolean
  isPopular: boolean
}

export type ServiceGroupType = {
  id: number
  name: string
  logo: string
  apearInApp: boolean
  orderId: number
  nameInApp: string
  showInAppMiddle: boolean
}
