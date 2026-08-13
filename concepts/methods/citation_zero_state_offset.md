# Citation zero-state offset

## Summary

Citation zero-state offset is the modeling adjustment that maps a paper with zero observed citations into a positive starting state so cumulative-advantage equations can handle the first citation.

## Canonical Form

- Unit of analysis: paper, citation count, success count, model state, initial attractiveness parameter, or low-citation bin.
- Typical representation: publication-as-first-success convention, citation count plus offset, or low-count adjustment parameter.
- Method target: keep transition probability proportional to a positive state even when observed citation count is zero.
- Empirical signature: model fit or interpretation changes mainly for uncited and very low-cited papers, while tail behavior remains governed by cumulative advantage.

## Uses in Science of Science

- Bridges [cumulative advantage distribution](cumulative_advantage_distribution.md) to empirical citation data where papers can have zero citations.
- Anticipates later initial-attractiveness terms in [preferential attachment](../mechanisms/preferential_attachment.md) and citation-network growth models.
- Provides a model-side companion to [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md).
- Helps separate tail-scaling claims from fragile assumptions about the lowest citation bins.

## Operationalization

- Define the observed citation count and the model success count separately.
- Choose whether original publication counts as one success or whether an arbitrary offset is added to observed citations.
- Fit low-count bins with the offset documented, but avoid relying vital tail tests on the small-n region if the offset is uncertain.
- Report how uncited and singly cited papers are treated before comparing cumulative-advantage or preferential-attachment models.

## Evidence and Validations

- Verified full-text evidence from Price (1976) states that citation data create a zero ground-state problem because the model's success count needs a positive starting point.
- Price proposes treating the original publication as a first citation success, while noting that another offset can be used.
- The paper states that if publication is not counted as a first success, the Beta-function state can be defined as citation successes plus an arbitrary constant near unity.
- Price cautions that this adjustment mainly affects small citation counts and says vital tests should not rest on those small-n values.

## Caveats

- The offset is a modeling convention, not a directly observed citation event.
- Different offsets can change estimates for uncited and low-cited papers.
- Tail fits can look robust while low-count interpretation changes.
- Modern attachment-kernel models should report equivalent initial-attractiveness or baseline-rate assumptions.

## Links

- [cumulative advantage distribution](cumulative_advantage_distribution.md)
- [cumulative-advantage urn model](cumulative_advantage_urn_model.md)
- [citation distribution scaling](../measures/citation_distribution_scaling.md)
- [uncited-paper inclusion sensitivity](../validations/uncited_paper_inclusion_sensitivity.md)
- [uncited-paper mass](../measures/uncited_paper_mass.md)
- [preferential attachment](../mechanisms/preferential_attachment.md)
- [citation functional-form diagnostics](../validations/citation_functional_form_diagnostics.md)

## References

- Price, D. J. de Solla. (1976). A general theory of bibliometric and other cumulative advantage processes. *Journal of the American Society for Information Science*, 27(5), 292-306. https://doi.org/10.1002/asi.4630270505 [OpenAlex: W2080450835; Dimensions: pub.1038956878; WoS: unknown]

## Metadata

- Concept ID: `citation_zero_state_offset`
- Category: `methods`
- Status: `full_text_seed`
- First seen paper: Price (1976) (1976)
- Latest seen paper: Price (1976) (1976)
- Primary reference DOI: `10.1002/asi.4630270505`
- OpenAlex ID: `W2080450835`
- Dimensions ID: `pub.1038956878`
- SciSciNet ID: `W2080450835`
- Aliases: publication-as-first-citation offset; citation initial attractiveness offset; zero-citation state adjustment; low-count citation offset
