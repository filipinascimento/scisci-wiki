# Citation-regime stratified modeling

## Summary

Citation-regime stratified modeling is the method of splitting citation distributions into low, middle, and high regimes before fitting mechanisms, indicators, or distributional forms.

## Canonical Form

- Unit of analysis: paper, citation count, citation distribution regime, field-year cohort, or fitted model.
- Typical representation: regime-specific fit, thresholded distribution plot, or model-comparison table.
- Method target: avoid forcing one mechanism or functional form to explain uncited, moderately cited, and extremely cited papers.
- Empirical signature: different citation-count ranges show different fit behavior, mechanisms, or diagnostic residuals.

## Uses in Science of Science

- Organizes [citation functional-form diagnostics](../validations/citation_functional_form_diagnostics.md) before model fitting.
- Separates [low-citation short lifetime](../mechanisms/low_citation_short_lifetime.md) from [citation tail maturation bias](../validations/citation_tail_maturation_bias.md).
- Links high-tail mechanisms such as [citation memory-reinforcement model](../mechanisms/citation_memory_reinforcement_model.md) to lower-count regimes that may follow other processes.
- Helps prevent tail-focused indicators from being generalized to the whole citation distribution.

## Operationalization

- Define low, middle, and high citation-count ranges using empirical thresholds, percentile cutoffs, or model residuals.
- Fit candidate distributions separately within each regime.
- Report whether mechanisms, time scales, and data limitations differ by regime.
- Use sensitivity checks to determine whether regime boundaries are robust.
- Pair regime fits with global model diagnostics so local fit quality is not mistaken for full-distribution validity.

## Evidence and Validations

- Verified full-text evidence from Redner (1998) argues that minimally cited and heavily cited papers may require different statistical descriptions and mechanisms.
- The paper's citation-distribution analysis shows that simple global fits fail across the whole range.
- This motif is a modeling protocol rather than a specific distributional claim.
- It provides a reusable rule for later citation-distribution studies: test regimes before assigning a single explanatory model.

## Caveats

- Regime boundaries can be arbitrary if not justified by diagnostics or theory.
- Stratifying too aggressively can hide continuity in the underlying process.
- Regime-specific fits should still account for cohort age, field, and source coverage.

## Links

- [citation functional-form diagnostics](../validations/citation_functional_form_diagnostics.md)
- [low-citation short lifetime](../mechanisms/low_citation_short_lifetime.md)
- [citation tail maturation bias](../validations/citation_tail_maturation_bias.md)
- [citation memory-reinforcement model](../mechanisms/citation_memory_reinforcement_model.md)
- [midrange stretched-exponential citation regime](../validations/midrange_stretched_exponential_citation_regime.md)
- [citation rank-exceedance mapping](citation_rank_exceedance_mapping.md)

## References

- Redner, S. (1998). How popular is your paper? An empirical study of the citation distribution. *European Physical Journal B*, 4, 131-134. https://doi.org/10.1007/s100510050359 [OpenAlex: W2062021443; Dimensions: pub.1020100757; SciSciNet: W2062021443; WoS: unknown]

## Metadata

- Concept ID: `citation_regime_stratified_modeling`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Redner (1998) (1998)
- Latest seen paper: Redner (1998) (1998)
- Primary reference DOI: `10.1007/s100510050359`
- OpenAlex ID: `W2062021443`
- Dimensions ID: `pub.1020100757`
- SciSciNet ID: `W2062021443`
- Aliases: citation regime modeling; stratified citation distribution modeling; low-middle-tail citation modeling; citation regime split
