Actúa como QA Automation Engineer experto en Playwright con TypeScript.

Contexto:
- Ya existe una clase LoginPage en el proyecto


Tarea:
Genera un test E2E para validar que un usuario puede loguearse correctamente en Saucedemo.
Genera un est E2E para validar que un usuario NO puede loguearse correctamente en Saucedemo.

Requisitos:
- Usar Playwright test
- Usar la clase LoginPage
- No interactuar directamente con page (usar POM)
- Incluir validaciones fuertes:
  - URL contiene /inventory
  - texto visible "Products"
  - Valida que texto de error en caso de login fallido

Output:
- Código completo listo para ejecutar


Restricciones:

- El archivo debe llamarse: login.e2e.spec.ts
- Debe ubicarse en: /tests
- No crear archivos adicionales
- No modificar el Page Object existente
- No debes crear nuevos métodos en el POM
- Solo usar los métodos existentes
- No incluir explicaciones