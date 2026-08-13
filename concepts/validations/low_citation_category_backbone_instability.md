# Low-citation category backbone instability

## Summary

Low-citation category backbone instability is the caveat that field-map backbones are less stable for subject categories with sparse citation support, especially categories weakly represented in citation-index samples.

## Canonical Form

- Unit of analysis: subject category, co-citation matrix row, macro-discipline factor, map node, or field overlay.
- Typical representation: low-citation flag, minimum-cite threshold, sparse-category caveat, or factor-placement audit.
- Validation target: avoid overinterpreting map positions for categories with too little citation evidence.
- Empirical signature: some categories have very few citation instances compared with heavily cited scientific categories.

## Uses in Science of Science

- Qualifies [WoS subject-category co-citation matrices](../representations/wos_subject_category_cocitation_matrix.md).
- Provides a robustness layer for [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md).
- Extends [accessible classification validity tradeoff](accessible_classification_validity_tradeoff.md) to sparse category placement.
- Helps interpret arts, humanities, and low-citation fields on science maps.

## Operationalization

- Count citation instances per subject category before constructing the map backbone.
- Flag categories below a minimum support threshold.
- Test whether sparse categories move or merge under alternate factor solutions or supplemental samples.
- Report categories retained for interpretive completeness despite sparse evidence.
- Avoid making strong structural claims from low-support category positions.

## Evidence and Validations

- Verified full-text evidence from Porter and Rafols (2009) reports citation counts across 244 Web of Science subject categories, ranging from only 4 citations for Dance to 78,148 citations for Biochemistry and Molecular Biology.
- The authors note that many arts and humanities categories are infrequently cited compared with the rest of the matrix.
- They ran a supplemental Arts and Humanities Citation Index sample and retained a separate Literature and Arts factor after checking whether additional structure or relocation was warranted.

## Caveats

- Low citation support can reflect database coverage, field citation culture, or genuine boundary position.
- Supplemental samples reduce but do not eliminate sparse-category uncertainty.
- Sparse categories may still be important for policy, humanities scholarship, or interdisciplinary bridges.

## Links

- [WoS subject-category co-citation matrix](../representations/wos_subject_category_cocitation_matrix.md)
- [macro-discipline factor aggregation](../methods/macro_discipline_factor_aggregation.md)
- [accessible classification validity tradeoff](accessible_classification_validity_tradeoff.md)
- [field classifications](../measures/field_classifications.md)
- [science maps](../representations/science_maps.md)
- [cited subject-category match-yield audit](cited_subject_category_match_yield_audit.md)

## References

- Porter, A. L., & Rafols, I. (2009). Is science becoming more interdisciplinary? Measuring and mapping six research fields over time. *Scientometrics*, 81, 719-745. https://doi.org/10.1007/s11192-008-2197-2 [OpenAlex: W2087238585; Dimensions: pub.1024224648; SciSciNet: W2087238585; WoS: unknown]

## Metadata

- Concept ID: `low_citation_category_backbone_instability`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Porter and Rafols (2009) (2009)
- Latest seen paper: Porter and Rafols (2009) (2009)
- Primary reference DOI: `10.1007/s11192-008-2197-2`
- OpenAlex ID: `W2087238585`
- Dimensions ID: `pub.1024224648`
- SciSciNet ID: `W2087238585`
- Aliases: sparse subject-category instability; low-citation map-node caveat; sparse SC backbone instability; weak citation-support field placement
