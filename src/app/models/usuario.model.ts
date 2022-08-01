export class Usuario{
  constructor(
    public _id: String,
    public nombre: String,
    public apellido: String,
    public email: String,
    public telefono: Number,
    public direccion: String,
    public oficio: String,
    public password: String,
    public rol: String
  ){}
}
