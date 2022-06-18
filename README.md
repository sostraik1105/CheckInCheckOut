# Checkin-Checkout de Horarios

## _Modelo de Registo_

| Campo        | Tipo de dato | Formato | Solicitado |
| ------------ | ------------ | ------- | ---------- |
| id           | int          | Auto    | No         |
| employee     | String       | A123    | Si         |
| entranceTime | Date         | UTC     | No         |
| exitTime     | Date         | UTC     | No         |
| status       | String       | ---     | No         |

## _Requerimientos Funcionales_

- Registrar hora de ingreso de los trabajadores.
- Registrar hora de salida de los trabajadores.
- Solo se puede realizar la busqeda a los trabajadores que se </br> encuentran trabajando en el establecimiento.
