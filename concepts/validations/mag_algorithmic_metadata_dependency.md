# MAG algorithmic metadata dependency

## Summary

MAG-derived science-of-science data inherit algorithmic choices for field classification, paper families, and author or affiliation disambiguation.

## Canonical Form

- Unit of analysis: MAG paper, field label, author ID, affiliation ID, family ID, or derived SciSciNet record.
- Typical representation: source-algorithm dependency audit for inherited metadata.
- Mechanism, measurement, or validation target: downstream sensitivity to MAG classification and disambiguation algorithms.
- Empirical signature: derived results change when MAG algorithmic fields are replaced, audited, or compared with other sources..

## Uses in Science of Science

- Adds source-algorithm provenance to [MAG publication backbone](../datasets/mag_publication_backbone.md).
- Connects [author name disambiguation](../methods/author_name_disambiguation.md) and [field classification sensitivity](field_classification_sensitivity.md).
- Motivates [MAG-to-OpenAlex migration audit](mag_to_openalex_migration_audit.md).

## Operationalization

- Label MAG-derived fields, families, authors, and affiliations as algorithmic source outputs.
- Audit cross-dataset inconsistencies against OpenAlex, Dimensions, ORCID, or institutional data.
- Avoid sensitive downstream claims until disambiguation and classification are validated.

## Evidence and Validations

- Verified full-text evidence from Lin et al. (2023) describes MAG machine-learning-derived classifications, paper families, and disambiguation, and notes that such algorithms are imperfect and inconsistent across datasets.

## Caveats

- The dependency caveat is not evidence that MAG algorithms fail uniformly.
- Some alternatives carry their own algorithmic dependencies.

## Links

- [MAG publication backbone](../datasets/mag_publication_backbone.md)
- [Author name disambiguation](../methods/author_name_disambiguation.md)
- [Homonym and synonym author errors](homonym_synonym_author_errors.md)
- [Field-classification sensitivity](field_classification_sensitivity.md)
- [Paper-family canonicalization](../methods/paper_family_canonicalization.md)
- [MAG-to-OpenAlex migration audit](mag_to_openalex_migration_audit.md)

## References

- Lin, Z., Yin, Y., Liu, L., & Wang, D. (2023). SciSciNet: A large-scale open data lake for the science of science research. *Scientific Data*, 10, 315. https://doi.org/10.1038/s41597-023-02198-9 [OpenAlex: W4378980478; Dimensions: pub.1158536883; WoS: unknown]

## Metadata

- Concept ID: `mag_algorithmic_metadata_dependency`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Lin et al. (2023) (2023)
- Latest seen paper: Lin et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41597-023-02198-9`
- OpenAlex ID: `W4378980478`
- Dimensions ID: `pub.1158536883`
- SciSciNet ID: `W4378980478`
- Aliases: inherited MAG metadata caveat; source-algorithm dependency; MAG disambiguation dependency; MAG field-classifier caveat
