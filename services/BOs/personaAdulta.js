class PersonaAdulta {
  constructor(data) {
    (this._id = data._id),
      (this.IdEntidad = data.IdEntidad),
      (this.IdTipoEducacion = data.IdTipoEducacion),
      (this.IdPersona = data.IdPersona),
      (this.Jornada = data.Jornada),
      (this.Cargo = data.Cargo),
      (this.Salario = data.Salario);
  }
}

module.exports = PersonaAdulta;