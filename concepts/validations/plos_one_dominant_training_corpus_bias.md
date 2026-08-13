# PLOS ONE-dominant training corpus bias

## Summary

A multi-journal PLOS contribution corpus can still be dominated by PLOS ONE enough to require source-concentration checks.

## Canonical Form

- Unit of analysis: training paper, PLOS journal, contribution label, source share, role model, or validation split.
- Typical representation: journal-source concentration audit for contribution-role training data.
- Mechanism, measurement, or validation target: source-skew bias in contribution-role prediction.
- Empirical signature: model performance or role prevalence changes when PLOS ONE dominance is reweighted or excluded.

## Uses in Science of Science

- Refines contribution-model validation by linking it to [plos contribution statement training set](../datasets/plos_contribution_statement_training_set.md) and [same source contribution prediction boundary](same_source_contribution_prediction_boundary.md).
- Useful as a reusable check when [contribution taxonomy consistency filter](../methods/contribution_taxonomy_consistency_filter.md) is used in science-of-science inference.
- Creates cross-links to [reference based field reclassification filter](../methods/reference_based_field_reclassification_filter.md) so the motif is not interpreted in isolation.

## Operationalization

- Report source shares by PLOS journal and compute concentration indices.
- Refit or validate role models with journal reweighting, leave-one-journal-out tests, or PLOS ONE exclusion.
- Document how original contribution types are reduced or harmonized across sources.

## Evidence and Validations

- Verified local full text from Robinson-Garcia et al. (2020) states that 88 percent of the PLOS seed publications were from PLOS ONE and that seven original contribution types were reduced to five consistently used types.
- The motif isolates journal-composition skew inside the training corpus.

## Caveats

- This overlaps same-source portability but focuses on journal concentration rather than corpus family alone.
- Reweighting may reduce training sample size for smaller PLOS journals.

## Links

- [PLOS contribution-statement training set](../datasets/plos_contribution_statement_training_set.md)
- [Same-source contribution prediction boundary](same_source_contribution_prediction_boundary.md)
- [Contribution taxonomy consistency filter](../methods/contribution_taxonomy_consistency_filter.md)
- [Reference-based field reclassification filter](../methods/reference_based_field_reclassification_filter.md)
- [Bibliometric contributorship predictor set](../representations/bibliometric_contributorship_predictor_set.md)
- [Life-science generalizability boundary](life_science_generalizability_boundary.md)

## References

- Robinson-Garcia, N., Costas, R., Sugimoto, C. R., Lariviere, V., & Nane, G. F. (2020). Task specialization across research careers. *eLife*, 9, e60586. https://doi.org/10.7554/eLife.60586 [OpenAlex: W3097159753; Dimensions: pub.1132069903; WoS: unknown]

## Metadata

- Concept ID: `plos_one_dominant_training_corpus_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Robinson-Garcia et al. (2020) (2020)
- Latest seen paper: Robinson-Garcia et al. (2020) (2020)
- Primary reference DOI: `10.7554/elife.60586`
- OpenAlex ID: `W3097159753`
- Dimensions ID: `pub.1132069903`
- SciSciNet ID: `W3097159753`
- Aliases: PLOS ONE source dominance; PLOS training concentration; journal-skewed contribution corpus
