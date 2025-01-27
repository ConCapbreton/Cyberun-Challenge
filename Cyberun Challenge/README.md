PLAN: 

GET JSON FORMS WORKING USING THE CODE AT 
https://github.com/eclipsesource/jsonforms/tree/master/packages/vanilla-renderers/src/complex/categorization

THEN: 


STEP ONE: SET UP 3 CATEGORIES WITH BASIC FORMS
schema, a UI schema and json data (you can put these statically in your code), you have created 3 categories (tabs) and some form fields: All you need to do is base yourself on the 1st example on the page https://jsonforms.io/examples/categorization/


STEP TWO: REPLACE THE CATEGORY BUTTONS WITH DRAWERS
NB the idea is for this to be generic and not hard-coded,
replace the tabs located at the top with a drawer located on the left
We will use the Ant Design components (https://ant.design/) for this and in particular the component https://ant.design/components/drawer
If it suits you, you can use a Pro Layout (https://procomponents.ant.design/components/layout

STEP THREE: CREATE ANOTHER SCHEMA/UI/DATA WITH TWO CATEGORIES
you will create a second set of schema/ui/data slightly different from the first one which this time contains 2 categories.

FINAL PROJECT: 
a title + 3 subcategories displaying the forms of the first set, then a second title + 2 subcategories to display the forms of the second set
