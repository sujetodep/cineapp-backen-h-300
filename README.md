# cineapp-backend-h-300
Capa backend del proyecto **Sala de Cine**

---

## Registro inicial

Antes de registrar películas, primero se deben crear los **Géneros** utilizando el siguiente endpoint

`/api/cinema/genero/crear`

### Autenticación requerida
Este endpoint **requiere** el encabezado `Authorization` en formato `Bearer`

Para obtener este token, es necesario iniciar sesión con un **usuario Administrador** desde la aplicación, accediendo al almacenamiento local del navegador.

---

## Ejemplo de body del request

```json
{
  "titulo": "Ciencia Ficción",
  "descripcion": "Aunque no lo creas, aquí encuentras las historias más surrealistas",
  "codigo": "ficcion"
}
```
Los géneros alimentarán la lista correspondiente para la creación de Películas.
