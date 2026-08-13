# MeSH field-definition sensitivity

## Summary

MeSH field-definition sensitivity recomputes field-dependent outcomes using MeSH-based biomedical fields rather than only journal or WoS subject categories.

## Canonical Form

- Unit of analysis: paper, biomedical field, MeSH term, citation outcome, or robustness specification.
- Typical representation: field-definition robustness check.
- Validation target: whether conclusions depend on the field taxonomy used for controls or normalization.
- Empirical signature: results are stable when MeSH-derived fields replace or supplement journal-category fields.

## Uses in Science of Science

- Extends [field classification sensitivity](field_classification_sensitivity.md).
- Links [field classifications](../measures/field_classifications.md) to biomedical topic metadata.
- Supports [field-normalized citation impact](../measures/field_normalized_citation_impact.md) robustness.
- Reuses biomedical signals related to [MeSH keyword trajectory shift](../measures/mesh_keyword_trajectory_shift.md).

## Operationalization

- Assign papers to MeSH-derived fields or keyword groups.
- Re-estimate field-controlled citation or impact models.
- Compare estimates against WoS or journal-category specifications.
- Report fields that are unstable across taxonomies.

## Evidence and Validations

- Verified full-text evidence from Wang, Jones, and Wang (2019) tests whether the setback result is robust to field definitions based on MeSH.
- The check addresses concerns that biomedical field controls or normalization could drive the near-miss advantage.
- Stability across field definitions strengthens the causal interpretation.

## Caveats

- MeSH is biomedical and does not generalize to all science.
- Papers can have many MeSH terms, requiring aggregation choices.
- Field-taxonomy robustness does not remove all topic-composition confounding.

## Links

- [field classification sensitivity](field_classification_sensitivity.md)
- [field classifications](../measures/field_classifications.md)
- [field-normalized citation impact](../measures/field_normalized_citation_impact.md)
- [MeSH keyword trajectory shift](../measures/mesh_keyword_trajectory_shift.md)

## References

- Wang, Y., Jones, B. F., & Wang, D. (2019). Early-career setback and future career impact. *Nature Communications*, 10, 4331. https://doi.org/10.1038/s41467-019-12189-3 [OpenAlex: W2977412048; Dimensions: pub.1121403320; WoS: unknown]

## Metadata

- Concept ID: `mesh_field_definition_sensitivity`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2019) (2019)
- Latest seen paper: Wang et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-12189-3`
- OpenAlex ID: `W2977412048`
- Dimensions ID: `pub.1121403320`
- SciSciNet ID: `W3099970011`
- Aliases: MeSH field robustness; biomedical field sensitivity; MeSH classification robustness
