# Author primary-field share annotation

## Summary

Author primary-field share annotation assigns each scientist a dominant field and leading subfields, with share percentages, using a documented journal or publication classification.

## Canonical Form

- Unit of analysis: author profile, publication set, field label, subfield label, or journal classification.
- Typical representation: most common field, top subfields, and percentage shares per author.
- Method target: contextualize author metrics by the fields in which a scientist publishes.
- Empirical signature: author metric records include dominant field and subfield shares rather than a single unqualified global rank.

## Uses in Science of Science

- Supplies the annotation layer for [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md).
- Connects [field classifications](../measures/field_classifications.md) to author-level evaluation.
- Adds field context to the [standardized author citation database](../datasets/standardized_author_citation_database.md).
- Depends on source coverage and [Scopus author profile disambiguation audit](../validations/scopus_author_profile_disambiguation_audit.md).

## Operationalization

- Classify each publication using a documented field or journal classification.
- For each author, count publications by field and subfield.
- Assign the most common field and two most common subfields.
- Store the percentage share for each label so interdisciplinary or mixed-field profiles remain visible.
- Flag unassigned authors whose publications do not map into the classification.

## Evidence and Validations

- Verified full-text evidence from Ioannidis et al. (2019) states that each scientist is assigned the most common scientific field and two most common subfields of their publications, with percentages for each.
- The paper uses 22 large fields and 176 subfields from the Science-Metrix journal classification.
- Ioannidis et al. note that unassigned scientists have no published items assignable to a field, often because they have few items or publish in venues outside the classification.

## Caveats

- Journal-based field labels can misclassify interdisciplinary papers and authors.
- Dominant-field assignment can hide minority subfields when percentages are not inspected.
- Conference-heavy or non-journal fields can be underassigned.

## Links

- [field-subfield author percentile ranks](../measures/field_subfield_author_percentile_ranks.md)
- [field classifications](../measures/field_classifications.md)
- [standardized author citation database](../datasets/standardized_author_citation_database.md)
- [Scopus](../datasets/scopus.md)
- [Scopus author profile disambiguation audit](../validations/scopus_author_profile_disambiguation_audit.md)
- [raw cross-field author comparison caveat](../validations/raw_cross_field_author_comparison_caveat.md)

## References

- Ioannidis, J. P. A., Baas, J., Klavans, R., & Boyack, K. W. (2019). A standardized citation metrics author database annotated for scientific field. *PLOS Biology*, 17(8), e3000384. https://doi.org/10.1371/journal.pbio.3000384 [OpenAlex: W2968900048; Dimensions: pub.1120285279; SciSciNet: W2968900048; WoS: unknown]

## Metadata

- Concept ID: `author_primary_field_share_annotation`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Ioannidis et al. (2019) (2019)
- Latest seen paper: Ioannidis et al. (2019) (2019)
- Primary reference DOI: `10.1371/journal.pbio.3000384`
- OpenAlex ID: `W2968900048`
- Dimensions ID: `pub.1120285279`
- SciSciNet ID: `W2968900048`
- Aliases: author dominant-field annotation; author subfield share; primary author field label; field-share author annotation
