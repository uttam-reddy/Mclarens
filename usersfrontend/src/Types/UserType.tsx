export type UsersResponse ={
    entity: User[]
    token: any
    status: boolean
    returnMessage: any[]
    totalPages: number
    totalRows: number
    pageSize: number
    isAuthenticated: boolean
    errors: Errors
  }
  export type UserResponse ={
    entity: User
    token: any
    status: boolean
    returnMessage: any[]
    totalPages: number
    totalRows: number
    pageSize: number
    isAuthenticated: boolean
    errors: Errors
  }
  
  export type User= {
    id: string
    name: string
    email: string
    address: string
    city: string
    createdDate: string
    updatedDate: string
    isDeleted: boolean
    departmentId: string
    designation: string
    about: string
  }
  
  export type Errors ={}
  