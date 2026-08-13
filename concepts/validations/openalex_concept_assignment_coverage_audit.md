# OpenAlex concept-assignment coverage audit

## Summary

OpenAlex concept-assignment coverage audit checks which works receive OpenAlex concept labels and whether missing labels bias field-normalized, topic, interdisciplinarity, or science-map analyses.

## Canonical Form

- Unit of analysis: OpenAlex work, concept assignment, concept hierarchy level, snapshot, field, year, language, or document type.
- Typical representation: share of works with at least one concept, missing-concept rate by stratum, and concept-level coverage table.
- Validation target: determine whether OpenAlex concept-labeled works represent the intended scholarly population.
- Empirical signature: concept coverage varies across sources, fields, languages, document types, and snapshot dates.

## Uses in Science of Science

- Validates [OpenAlex concept classifier](../methods/openalex_concept_classifier.md) outputs before they are used as field strata.
- Qualifies [paper-field linkages](../representations/paper_field_linkages.md), [field classifications](../measures/field_classifications.md), and [science maps](../representations/science_maps.md) built from OpenAlex concepts.
- Complements [citation database coverage sensitivity](citation_database_coverage_sensitivity.md) by separating topical-label coverage from bibliographic-record coverage.
- Supports [responsible metrics](../measures/responsible_metrics.md) when OpenAlex concepts are used to normalize citation or output indicators.

## Operationalization

- Start from a dated OpenAlex snapshot or API extraction and preserve the access route.
- Compute the proportion of works with at least one concept assignment overall and by publication year, source type, field proxy, language, document type, and DOI status.
- Keep unlabeled works in denominator tables unless the analysis explicitly targets concept-labeled works only.
- Compare concept coverage against alternative classification layers such as journal categories, citation clusters, Dimensions categories, or expert labels where available.

## Evidence and Validations

- Verified full-text evidence from Priem, Piwowar, and Orr (2022) states that OpenAlex concepts are Wikidata concepts arranged in a hierarchy derived from Microsoft Academic Graph.
- The same paper reports that works are assigned concepts using titles and abstracts with an automated classifier trained on MAG's corpus.
- Priem et al. report that around 85% of OpenAlex works have at least one concept assigned.
- This leaves a material unlabeled share, so analyses using concepts need a coverage audit rather than treating concept assignment as complete.

## Caveats

- The 85% figure comes from the 2022 OpenAlex description and should be refreshed for current snapshots.
- Missing concept labels can reflect missing title/abstract text, source ingestion differences, non-English content, or document-type differences.
- High assignment coverage does not prove classification accuracy; it only addresses denominator completeness.

## Links

- [OpenAlex](../datasets/openalex.md)
- [OpenAlex concept classifier](../methods/openalex_concept_classifier.md)
- [paper-field linkages](../representations/paper_field_linkages.md)
- [field classifications](../measures/field_classifications.md)
- [science maps](../representations/science_maps.md)
- [citation database coverage sensitivity](citation_database_coverage_sensitivity.md)
- [scholarly snapshot versioning](../methods/scholarly_snapshot_versioning.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Priem, J., Piwowar, H., & Orr, R. (2022). OpenAlex: A fully-open index of scholarly works, authors, venues, institutions, and concepts. *arXiv*. https://doi.org/10.48550/arXiv.2205.01833 [OpenAlex: W4229010617; Dimensions: pub.1147626509; WoS: unknown]

## Metadata

- Concept ID: `openalex_concept_assignment_coverage_audit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Priem et al. (2022) (2022)
- Latest seen paper: Priem et al. (2022) (2022)
- Primary reference DOI: `10.48550/arXiv.2205.01833`
- OpenAlex ID: `W4229010617`
- Dimensions ID: `pub.1147626509`
- SciSciNet ID: `W4229010617`
- Aliases: OpenAlex concept coverage; missing-concept audit; OpenAlex topic coverage audit; concept assignment denominator
