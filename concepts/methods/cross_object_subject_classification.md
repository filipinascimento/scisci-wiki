# Cross-object subject classification

## Summary

A common subject classification can be applied algorithmically across publications, grants, patents, policy papers, and clinical trials.

## Canonical Form

- Unit of analysis: publication, grant, patent, policy document, clinical trial, category, expert seed, or classifier.
- Typical representation: multi-entity classifier over shared subject categories.
- Mechanism, measurement, or validation target: field/category alignment across heterogeneous research-object types.
- Empirical signature: different research-object types receive comparable subject labels through the same classification system.

## Uses in Science of Science

- Refines cross-object classification by linking it to [field classifications](../measures/field_classifications.md) and [topic models](topic_models.md).
- Useful as a reusable check when [paper field linkages](../representations/paper_field_linkages.md) is used in science-of-science inference.
- Creates cross-links to [field classification sensitivity](../validations/field_classification_sensitivity.md) so the motif is not interpreted in isolation.

## Operationalization

- Use expert-defined search seeds, boosted concepts, and excluded concepts to define category boundaries.
- Train reproducible classifiers that assign subject categories to multiple entity types.
- Validate category assignments separately for publications, grants, patents, trials, and policy records.

## Evidence and Validations

- Verified full-text evidence from Hook et al. (2018) rejects journal-level categories as insufficient because journals cover only one graph component.
- The text describes machine-learning classification for multiple object types.

## Caveats

- Expert seeds can encode boundary choices.
- Reproducibility does not guarantee semantic correctness across entity types.

## Links

- [Field classifications](../measures/field_classifications.md)
- [Topic models](topic_models.md)
- [Paper-field linkages](../representations/paper_field_linkages.md)
- [Field-classification sensitivity](../validations/field_classification_sensitivity.md)
- [OpenAlex entity-type model](../representations/openalex_entity_type_model.md)
- [Transparent classification artifact release](transparent_classification_artifact_release.md)

## References

- Hook, D. W., Porter, S. J., & Herzog, C. (2018). Dimensions: Building context for search and evaluation. *Frontiers in Research Metrics and Analytics*, 3, 23. https://doi.org/10.3389/frma.2018.00023 [OpenAlex: W2888592790; Dimensions: pub.1106289502; WoS: unknown]

## Metadata

- Concept ID: `cross_object_subject_classification`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Hook et al. (2018) (2018)
- Latest seen paper: Hook et al. (2018) (2018)
- Primary reference DOI: `10.3389/frma.2018.00023`
- OpenAlex ID: `W2888592790`
- Dimensions ID: `pub.1106289502`
- SciSciNet ID: `W2888592790`
- Aliases: multi-entity field classification; cross-type category mapping; reproducible subject classifier
