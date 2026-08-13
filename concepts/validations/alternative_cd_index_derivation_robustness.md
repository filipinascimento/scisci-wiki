# Alternative CD-index derivation robustness

## Summary

Alternative CD-index derivation robustness checks whether disruption conclusions remain when the CD index is recomputed with alternative derivations, normalizations, or citation windows.

## Canonical Form

- Unit of analysis: focal paper, patent, citation neighborhood, CD-index variant, time window, or robustness panel.
- Typical representation: alternative CD-score trends, window-sensitivity curves, normalized-index comparison, or variant-by-year matrix.
- Validation target: ensure a disruption finding is not an artifact of one exact formula, scaling choice, or post-publication citation window.
- Empirical signature: the sign and broad trend of disruption results remain similar across reasonable CD-index variants.

## Uses in Science of Science

- Strengthens [disruption measure validation](disruption_measure_validation.md) by separating the focal claim from one score specification.
- Supports [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) and [CD-index time windows](../measures/cd_index_time_windows.md).
- Pairs with [cross-corpus disruptiveness replication](cross_corpus_disruptiveness_replication.md) when both metric and data-source robustness matter.
- Helps compare the original [disruption index](../measures/disruption_index.md), [modified CD index](../measures/modified_cd_index.md), developmental transforms, and normalized variants.

## Operationalization

- Identify plausible CD-index derivations and window lengths before robustness checks.
- Recompute focal-work disruption scores for each variant.
- Compare aggregate trends, rank-order stability, tail classification, and sensitivity of key covariates.
- Report variant definitions clearly, including treatment of focal-only, predecessor-only, and shared citing works.
- Use variants as robustness checks rather than choosing the one that most favors a preferred conclusion.

## Evidence and Validations

- Verified full-text evidence from Park, Leahey, and Funk (2023) measures CD5 as the primary disruption score and reports additional analyses using alternative windows.
- The paper states that similar declines appear when CD5 is computed on additional corpora and when alternative derivations of the CD index are used.
- Park et al. also compute normalized versions of the CD index to adjust for the increasing tendency for papers and patents to cite previous work.
- These checks support the interpretation that the observed decline is not only an artifact of one CD-index derivation.

## Caveats

- Robustness across variants does not prove that the metric captures all forms of innovation.
- Alternative CD-index derivations can shift interpretation between direction, magnitude, and citation-volume effects.
- Some variants may be better suited to patents than papers, or to mature citation windows than recent works.
- Robustness should be paired with external validation, text signals, and source-replication checks.

## Links

- [disruption index](../measures/disruption_index.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [modified CD index](../measures/modified_cd_index.md)
- [disruption measure validation](disruption_measure_validation.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [disruptiveness practice-control stack](disruptiveness_practice_control_stack.md)
- [cross-corpus disruptiveness replication](cross_corpus_disruptiveness_replication.md)
- [citation network rewiring nulls](../methods/citation_network_rewiring_nulls.md)
- [developmental index](../measures/developmental_index.md)

## References

- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `alternative_cd_index_derivation_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Park et al. (2023) (2023)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1038/s41586-022-05543-x`
- OpenAlex ID: `W4313545395`
- Dimensions ID: `pub.1154226028`
- SciSciNet ID: `W4313545395`
- Aliases: CD-index variant robustness; alternative disruption-index derivation; CD5 derivation sensitivity; disruption metric variant check
