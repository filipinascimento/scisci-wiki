# Doctoral-domain training-match heuristic

## Summary

Assigns ambiguous fields to broad domains using observed doctoral-training alignment rather than only a fixed taxonomy.

## Canonical Form

- Unit of analysis: ambiguous field and broad domain assignment.
- Typical representation: domain support computed from doctoral-origin departments.
- Method target: empirically grounded domain assignment for faculty fields.
- Empirical signature: field-domain assignment follows the domain where faculty doctoral training most often aligns.

## Uses in Science of Science

- Extends [faculty field-multilabel assignment](faculty_field_multilabel_assignment.md) with a training-evidence heuristic.
- Useful when field names straddle domains, such as engineering/CS or education/psychology.
- Connects domain assignment to [domain macroculture rank coupling](../mechanisms/domain_macroculture_rank_coupling.md).

## Operationalization

- For each ambiguous field, compute domain support from doctoral-origin departments and choose the maximum.
- Log alternatives, support shares, and manual overrides.
- Test whether domain-level results are robust to plausible alternate assignments.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) assigns ambiguous fields such as Computer Engineering and Educational Psychology to domains using doctoral-training alignment.
- This makes the domain taxonomy an empirically supported classification step.

## Caveats

- The heuristic can encode historical hiring and training bias into the domain label.
- Domain labels may be unsuitable for emerging interdisciplinary fields.

## Links

- [Faculty field-multilabel assignment](faculty_field_multilabel_assignment.md)
- [Field classifications](../measures/field_classifications.md)
- [Field coherence inclusion threshold](../validations/field_coherence_inclusion_threshold.md)
- [Faculty doctoral-origin composition](../measures/faculty_doctoral_origin_composition.md)
- [Domain macroculture rank coupling](../mechanisms/domain_macroculture_rank_coupling.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `doctoral_domain_training_match_heuristic`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: training-based domain assignment; doctoral-field domain heuristic; faculty field domain matching
