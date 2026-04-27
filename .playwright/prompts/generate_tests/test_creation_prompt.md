Actúa como QA Automation Engineer experto en Playwright con TypeScript.

Contexto:
- Existe un Page Object Model llamado LoginPage
- Existe lógica de validación en archivos como loginValidations.ts
- No debes crear nuevos métodos fuera de los existentes

Tarea:
Generar tests E2E para Saucedemo usando el POM existente.

Casos a cubrir:
1) Login exitoso
- usuario válido
- validar redirección a /inventory
- validar texto "Products"

2) Login inválido
- credenciales incorrectas
- validar mensaje de error

Requisitos:
- Usar TypeScript
- Usar LoginPage
- Usar loginValidations
- Usar productListPageValidations
- Usar métodos existentes (no inventar)
- No usar page directamente
- Tests pequeños y claros

Output:
- Código listo para ejecutar
- Archivo: tests/login.e2e.spec.ts
- No incluir explicaciones