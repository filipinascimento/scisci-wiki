# Faculty same-field unit collapse

## Summary

Collapses multiple same-field departments at one university into one analytical unit so field-level hiring networks are not inflated by internal school structure.

## Canonical Form

- Unit of analysis: university-field analytical unit.
- Typical representation: merged `(university, field)` node with a count of source departments.
- Method target: node definition for field-specific faculty hiring networks.
- Empirical signature: same-university same-field departments are counted once for placement-flow inference.

## Uses in Science of Science

- Adds a node-cleaning step to [faculty hiring networks](../representations/faculty_hiring_networks.md).
- Useful when universities divide a field across schools, departments, or programs.
- Connects field assignment to [faculty field-multilabel assignment](faculty_field_multilabel_assignment.md).

## Operationalization

- Aggregate records to `(university, field)` before edge construction.
- Retain a count and provenance of merged departments or units.
- Run sensitivity checks where within-university units are kept separate for fields with meaningful internal stratification.

## Evidence and Validations

- Verified full-text evidence from Wapman et al. (2022) treats Carnegie Mellon's seven School of Computer Science departments as one Computer Science unit.
- The decision prevents internal school structure from inflating field-level node counts.

## Caveats

- Unit collapse obscures within-university departmental heterogeneity.
- Some same-field units may have genuinely distinct hiring markets.

## Links

- [Faculty field-multilabel assignment](faculty_field_multilabel_assignment.md)
- [Faculty hiring networks](../representations/faculty_hiring_networks.md)
- [Faculty prestige-rank inference](faculty_prestige_rank_inference.md)
- [Field coherence inclusion threshold](../validations/field_coherence_inclusion_threshold.md)
- [Faculty roster panel](../datasets/faculty_roster_panel.md)

## References

- Wapman, K. H., Zhang, S., Clauset, A., & Larremore, D. B. (2022). Quantifying hierarchy and dynamics in US faculty hiring and retention. *Nature*, 610, 120-127. https://doi.org/10.1038/s41586-022-05222-x [OpenAlex: W4296907580; Dimensions: pub.1151187611; WoS: unknown]

## Metadata

- Concept ID: `faculty_same_field_unit_collapse`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Wapman et al. (2022) (2022)
- Latest seen paper: Wapman et al. (2022) (2022)
- Primary reference DOI: `10.1038/s41586-022-05222-x`
- OpenAlex ID: `W4296907580`
- Dimensions ID: `pub.1151187611`
- SciSciNet ID: `W4296907580`
- Aliases: same-field department collapse; university-field unit aggregation; faculty hiring node collapse
