# Citation-delay operationalization robustness

## Summary

Citation-delay operationalization robustness checks whether conclusions about delayed citation impact hold under alternative definitions of citation timing.

## Canonical Form

- Unit of analysis: paper, citation trajectory, delay score, citation window, or model specification.
- Typical representation: compare a focal delay score with alternate timing ratios or time-to-fraction measures.
- Validation target: denominator and timing robustness for claims about slow or fast citation accumulation.
- Empirical signature: focal conclusions remain stable when citation delay is operationalized differently.

## Uses in Science of Science

- Validates [citation speed-delay measure](../measures/citation_speed_delay_measure.md).
- Complements [citation window selection](../methods/citation_window_selection.md).
- Supports interpretations of [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md).
- Links to broader citation-trajectory robustness.

## Operationalization

- Compute the focal citation-delay metric.
- Re-estimate models with alternate definitions, such as early-to-long-window citation ratios or time to half of eventual citations.
- Check sensitivity to minimum citation-count filters.
- Report whether the direction and interpretation of focal coefficients change.

## Evidence and Validations

- Verified full-text evidence from Wang, Thijs, and Glanzel (2015) tests citation-delay results with year-3 to year-13 citation ratios and the year in which a paper reaches half of total citations.
- The paper also checks exclusion of papers below a citation threshold because ratio measures can be unstable with small denominators.
- The reported conclusions remain broadly robust across these alternate operationalizations.

## Caveats

- Alternate timing definitions still depend on the fixed citation census date.
- Minimum-count filters can select for higher-impact papers.
- Robustness of timing measures does not prove causal mechanisms behind delayed recognition.

## Links

- [citation speed-delay measure](../measures/citation_speed_delay_measure.md)
- [citation window selection](../methods/citation_window_selection.md)
- [journal fixed-effect citation model](../methods/journal_fixed_effect_citation_model.md)
- [paper-feature citation control stack](../methods/paper_feature_citation_control_stack.md)
- [interdisciplinary citation delay](../mechanisms/interdisciplinary_citation_delay.md)

## References

- Wang, J., Thijs, B., & Glanzel, W. (2015). Interdisciplinarity and impact: Distinct effects of variety, balance, and disparity. *PLOS ONE*, 10(5), e0127298. https://doi.org/10.1371/journal.pone.0127298 [OpenAlex: W363554780; Dimensions: pub.1023200340; SciSciNet: W363554780; WoS: unknown]

## Metadata

- Concept ID: `citation_delay_operationalization_robustness`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2015) (2015)
- Latest seen paper: Wang et al. (2015) (2015)
- Primary reference DOI: `10.1371/journal.pone.0127298`
- OpenAlex ID: `W363554780`
- Dimensions ID: `pub.1023200340`
- SciSciNet ID: `W363554780`
- Aliases: citation-delay robustness; citation timing operationalization check; delay-score robustness
