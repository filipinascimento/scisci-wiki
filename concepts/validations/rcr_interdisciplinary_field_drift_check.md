# RCR interdisciplinary field-drift check

## Summary

RCR interdisciplinary field-drift check tests whether dynamic co-citation field expansion penalizes interdisciplinary papers by raising their field citation rate and lowering RCR.

## Canonical Form

- Unit of analysis: paper, co-citation field, RCR time series, interdisciplinary funding program, or comparison portfolio.
- Typical representation: RCR drop indicator, field-growth explanation, and overrepresentation test for interdisciplinary papers.
- Validation target: whether dynamic field definitions create unfair downward drift for interdisciplinary work.
- Empirical signature: interdisciplinary papers are no more likely, or are less likely, to experience RCR drops caused by field expansion.

## Uses in Science of Science

- Extends [co-citation field stabilization check](co_citation_field_stabilization_check.md) to interdisciplinary portfolios.
- Stress-tests [co-citation field normalization](../methods/co_citation_field_normalization.md).
- Connects [co-citation network field definition](../representations/co_citation_network_field_definition.md) with [interdisciplinarity citation-window reversal](interdisciplinarity_citation_window_reversal.md).
- Helps distinguish dynamic-field measurement drift from substantive changes in influence.

## Operationalization

- Track RCR values for papers across update windows.
- Flag papers whose RCR declines after new citations enlarge or shift the co-citation field.
- Identify an interdisciplinary portfolio or proxy and compare its drop rate against relevant controls.
- Report both small drops and practically meaningful drops.

## Evidence and Validations

- Verified full-text evidence from Hutchins et al. (2016) raises the concern that out-of-network citations could increase FCR and lower RCR as a work becomes relevant to additional disciplines.
- Hutchins et al. report that only a small share of papers experienced any RCR drop, and an even smaller share dropped by 0.1 or more.
- The paper tests NIH Interdisciplinary Research Common Fund articles and reports that they were less likely to experience RCR drops than comparison groups, while noting that the rare-event result could reflect noise.

## Caveats

- Interdisciplinarity definitions are contested and can change as fields mature.
- Rare drop events make the test statistically fragile.
- A lower RCR after field expansion can be interpreted either as a measurement problem or as a new, broader comparison set.

## Links

- [co-citation field stabilization check](co_citation_field_stabilization_check.md)
- [co-citation field normalization](../methods/co_citation_field_normalization.md)
- [co-citation network field definition](../representations/co_citation_network_field_definition.md)
- [interdisciplinarity citation-window reversal](interdisciplinarity_citation_window_reversal.md)
- [Relative Citation Ratio](../measures/relative_citation_ratio.md)

## References

- Hutchins, B. I., Yuan, X., Anderson, J. M., & Santangelo, G. M. (2016). Relative Citation Ratio (RCR): A new metric that uses citation rates to measure influence at the article level. *PLOS Biology*, 14(9), e1002541. https://doi.org/10.1371/journal.pbio.1002541 [OpenAlex: W2953304564; Dimensions: pub.1017460035; SciSciNet: W2953304564; WoS: unknown]

## Metadata

- Concept ID: `rcr_interdisciplinary_field_drift_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Hutchins et al. (2016) (2016)
- Latest seen paper: Hutchins et al. (2016) (2016)
- Primary reference DOI: `10.1371/journal.pbio.1002541`
- OpenAlex ID: `W2953304564`
- Dimensions ID: `pub.1017460035`
- SciSciNet ID: `W2953304564`
- Aliases: interdisciplinary RCR drift; RCR field-expansion penalty check; interdisciplinary co-citation drift; dynamic-field RCR drop test
