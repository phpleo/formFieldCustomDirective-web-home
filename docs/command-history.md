# Command history

## Part 1

### Setting up the project
- Create a git repository and add DEV branch.
- Create a new Angular project in the DEV branch.
- Setting up Bootstrap CSS in the angular project.

### App structure
- Create a new module called `products` in the `app` folder, with routing: 
```bash
ng g module products --module app --route products
```

- Create a new component called `productPage` in the `products` folder: 
```bash
ng g component products/pages/productPage --skip-selector
```

- Update the `products-routing.module.ts` file to load the `productPage` component.

- Update the `app-routing.module.ts` file to load the `products` module as a Lazy-loading route.

- Add a form in the `productPage` component with the following design:


### Configure the Reactive Form
- Configure the reactive form and add validations to the form fields:
    - Name: required, min 6 characters, email.

### Shared Module
- Create a new module called `shared` in the `app` folder.
```bash
ng g module shared/shared
```

### Create a new directive to display Form errors
- Create a new directive called `customLabel` in the `shared/directives` folder, to capture the errors of the form fields and display them in a label below the form field:
```bash
ng g directive shared/directives/customLabel --flat
```

### Show all Form errors
- Add the `customLabel` directive to the form fields to display the errors.