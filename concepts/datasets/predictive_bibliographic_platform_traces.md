# Predictive bibliographic platform traces

## Summary

Predictive bibliographic platform traces are large-scale digital records from scholarly databases, submission systems, identifier systems, and attention platforms that make science-of-science forecasting possible.

## Canonical Form

- Unit of analysis: publication, citation, author profile, identifier, submission, review event, online mention, platform account, or prediction task.
- Typical representation: joined platform tables, time-stamped event streams, entity graphs, or model-ready feature panels.
- Dataset target: provide broad, routinely updated traces of scientific activity for prediction and evaluation research.
- Empirical signature: forecasts use traces from platforms such as Google Scholar, PubMed, Web of Science, JSTOR, ORCID, conference systems, and altmetrics rather than hand-curated expert histories alone.

## Uses in Science of Science

- Supplies baseline inputs for [scientific discovery prediction](../methods/scientific_discovery_prediction.md) and [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md).
- Complements fresher open or licensed sources such as [OpenAlex](openalex.md), [Dimensions](dimensions.md), and [scholarly data lakes](scholarly_data_lakes.md).
- Connects to [context-specific SciSci prediction data](context_specific_scisci_prediction_data.md), which adds more situated and often less public signals.
- Requires [automated predictive-evaluation safeguards](../validations/automated_predictive_evaluation_safeguards.md) when platform traces influence funding, publication, hiring, or evaluation.

## Operationalization

- Identify the platform traces available before the prediction horizon.
- Resolve papers, authors, institutions, venues, grants, submissions, and attention events across identifiers.
- Preserve snapshot dates, access routes, data licenses, provenance, missingness, and platform-specific biases.
- Benchmark generic platform traces against richer task-specific data and simple baselines.

## Evidence and Validations

- Verified full-text evidence from Clauset, Larremore, and Sinatra (2017) argues that digital technology has made generic measurable quantities about science abundant.
- The paper names Google Scholar, PubMed, Web of Science, JSTOR, ORCID, EasyChair, and altmetrics as platforms enabling a new generation of science-of-science research.
- Clauset et al. connect those traces to computational tools for analyzing papers, careers, citations, productivity, funding, and prizes.
- The same paper cautions that broad traces can support prediction but are often crude, lagging, and vulnerable to feedback-loop risks if used for evaluation.

## Caveats

- Platform coverage, identifiers, access policies, and matching algorithms change over time.
- Broad traces are easier to collect than to interpret causally.
- Using platform traces for prediction can increase surveillance, gaming, and inequality if deployed without safeguards.

## Links

- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md)
- [context-specific SciSci prediction data](context_specific_scisci_prediction_data.md)
- [OpenAlex](openalex.md)
- [Dimensions](dimensions.md)
- [Web of Science](web_of_science.md)
- [Google Scholar](google_scholar.md)
- [JSTOR network dataset](jstor_network_dataset.md)
- [altmetrics](altmetrics.md)
- [scholarly data lakes](scholarly_data_lakes.md)
- [automated predictive-evaluation safeguards](../validations/automated_predictive_evaluation_safeguards.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `predictive_bibliographic_platform_traces`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: platform traces; bibliographic prediction traces; science platform data; digital science traces
