module.exports = function(migration) {
  const types = migration
    .createContentType("types")
    .name("Types")
    .description("Property types")
    .displayField("name");
  types
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  types.changeEditorInterface("name", "singleLine", {});
  const statuses = migration
    .createContentType("statuses")
    .name("Statuses")
    .description("Property status")
    .displayField("name");
  statuses
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  statuses.changeEditorInterface("name", "singleLine", {});
  const properties = migration
    .createContentType("properties")
    .name("Properties")
    .description("Homes, townhomes, etc.")
    .displayField("address");
  properties
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  properties
    .createField("address")
    .name("Address")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  properties
    .createField("photos")
    .name("Photos")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkMimetypeGroup: ["image"]
        }
      ],

      linkType: "Asset"
    });

  properties
    .createField("type")
    .name("Type")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ["types"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  properties
    .createField("status")
    .name("Status")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["statuses"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  properties
    .createField("favorite")
    .name("Favorite")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  properties
    .createField("rental")
    .name("Rental")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  properties
    .createField("archived")
    .name("Archived")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  properties
    .createField("description")
    .name("Description")
    .type("Text")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  properties
    .createField("price")
    .name("Price")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  properties
    .createField("homeSize")
    .name("Home Size")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  properties
    .createField("lotSize")
    .name("Lot Size")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  properties
    .createField("bedrooms")
    .name("Bedrooms")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  properties
    .createField("bathrooms")
    .name("Bathrooms")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  properties
    .createField("year")
    .name("Year")
    .type("Date")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  properties
    .createField("garages")
    .name("Garages")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  properties
    .createField("hoaFees")
    .name("HOA Fees")
    .type("Number")
    .localized(false)
    .required(false)
    .validations([
      {
        range: {
          min: 0
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  properties.changeEditorInterface("title", "singleLine", {});
  properties.changeEditorInterface("address", "singleLine", {});

  properties.changeEditorInterface("photos", "assetGalleryEditor", {
    helpText: "Please upload at least ONE photo of the property"
  });

  properties.changeEditorInterface("type", "entryLinkEditor", {});
  properties.changeEditorInterface("status", "entryLinkEditor", {});

  properties.changeEditorInterface("favorite", "boolean", {
    trueLabel: "Yes",
    falseLabel: "No"
  });

  properties.changeEditorInterface("rental", "boolean", {
    trueLabel: "Yes",
    falseLabel: "No"
  });

  properties.changeEditorInterface("archived", "boolean", {
    trueLabel: "Yes",
    falseLabel: "No"
  });

  properties.changeEditorInterface("description", "markdown", {});
  properties.changeEditorInterface("price", "numberEditor", {});
  properties.changeEditorInterface("homeSize", "numberEditor", {});
  properties.changeEditorInterface("lotSize", "numberEditor", {});
  properties.changeEditorInterface("bedrooms", "numberEditor", {});
  properties.changeEditorInterface("bathrooms", "numberEditor", {});

  properties.changeEditorInterface("year", "datePicker", {
    format: "dateonly",
    helpText: "Select any day/month of the Year for the property"
  });

  properties.changeEditorInterface("garages", "numberEditor", {});
  properties.changeEditorInterface("hoaFees", "numberEditor", {});
  const affiliates = migration
    .createContentType("affiliates")
    .name("Affiliates")
    .description("Site affiliates")
    .displayField("name");
  affiliates
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  affiliates
    .createField("logo")
    .name("Logo")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  affiliates
    .createField("order")
    .name("Order")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true
      },
      {
        range: {
          min: 1
        },

        message:
          "Please choose a different number that is larger than 0 and not already picked."
      }
    ])
    .disabled(false)
    .omitted(false);

  affiliates.changeEditorInterface("name", "singleLine", {});
  affiliates.changeEditorInterface("logo", "assetLinkEditor", {});
  affiliates.changeEditorInterface("order", "numberEditor", {});
  const forms = migration
    .createContentType("forms")
    .name("Forms")
    .description("Site forms ordered by category")
    .displayField("name");
  forms
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  forms
    .createField("file")
    .name("File")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  forms
    .createField("category")
    .name("Category")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkContentType: ["category"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  forms.changeEditorInterface("name", "singleLine", {});
  forms.changeEditorInterface("file", "assetLinkEditor", {});
  forms.changeEditorInterface("category", "entryLinkEditor", {});
  const category = migration
    .createContentType("category")
    .name("Category")
    .description("Form category")
    .displayField("name");
  category
    .createField("name")
    .name("Name")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  category
    .createField("order")
    .name("Order")
    .type("Integer")
    .localized(false)
    .required(true)
    .validations([
      {
        unique: true
      },
      {
        range: {
          min: 1
        }
      }
    ])
    .disabled(false)
    .omitted(false);

  category.changeEditorInterface("name", "singleLine", {});
  category.changeEditorInterface("order", "numberEditor", {});
};
