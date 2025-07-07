export type TasteType = {
    id: number
    name: string
  }
  
  export type OriginType = {
    id: number
    name: string
  }
  
  export type ResultFilterTypes = {
    taste: TasteType[]
    origin: OriginType[]
  }
  
  export type FilterTypes = {
    result: ResultFilterTypes
    loading: boolean
    error: string
  }