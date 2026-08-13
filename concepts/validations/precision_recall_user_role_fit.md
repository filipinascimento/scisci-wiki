# Precision-recall user-role fit

## Summary

Precision-recall user-role fit is the validation principle that an indicator with high precision but low recall can be useful for selective discovery while remaining unsuitable for comprehensive evaluation.

## Canonical Form

- Unit of analysis: indicator threshold, retrieval set, highly cited paper, user role, or evaluation task.
- Typical representation: precision and recall compared across indicators and task definitions.
- Validation target: fit between metric performance and how a user intends to use the signal.
- Empirical signature: an indicator identifies a small high-quality subset but misses many relevant cases.

## Uses in Science of Science

- Refines [altmetric highly cited filtering](altmetric_highly_cited_filtering.md).
- Provides an applied validation frame for [responsible metrics](../measures/responsible_metrics.md).
- Helps separate discovery tools from evaluation indicators.
- Generalizes beyond altmetrics to citation indicators, search rankings, and screening models.

## Operationalization

- Define the target set, such as top-cited papers or policy-mentioned papers.
- Choose a threshold for the candidate indicator.
- Compute precision, recall, and the baseline prevalence of the target set.
- Interpret the results relative to the user role: alerting, browsing, collection development, formal evaluation, or resource allocation.

## Evidence and Validations

- Verified full-text evidence from Costas et al. (2015) shows that some altmetric indicators can identify highly cited publications with relatively high precision while recovering only a small share of all highly cited publications.
- The paper argues that this makes such indicators more plausible as selective filters than as comprehensive evaluation tools.
- The distinction explains why the same altmetric source can be useful for discovery and weak for institutional assessment.

## Caveats

- Precision and recall depend on the chosen target indicator and threshold.
- High precision against citations does not prove societal impact.
- Low recall may be unacceptable when missing relevant cases has high costs.

## Links

- [altmetric highly cited filtering](altmetric_highly_cited_filtering.md)
- [altmetric-citation association](altmetric_citation_association.md)
- [responsible metrics](../measures/responsible_metrics.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [altmetric audience-filtering hypothesis](../mechanisms/altmetric_audience_filtering_hypothesis.md)

## References

- Costas, R., Zahedi, Z., & Wouters, P. (2015). Do altmetrics correlate with citations? Extensive comparison of altmetric indicators with citations from a multidisciplinary perspective. *Journal of the Association for Information Science and Technology*, 66(10), 2003-2019. https://doi.org/10.1002/asi.23309 [OpenAlex: W2164277894; Dimensions: pub.1001115574; SciSciNet: W2164277894; WoS: unknown]

## Metadata

- Concept ID: `precision_recall_user_role_fit`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Costas et al. (2015) (2015)
- Latest seen paper: Costas et al. (2015) (2015)
- Primary reference DOI: `10.1002/asi.23309`
- OpenAlex ID: `W2164277894`
- Dimensions ID: `pub.1001115574`
- SciSciNet ID: `W2164277894`
- Aliases: task-specific precision recall; indicator user-role fit; selective-filter validation
