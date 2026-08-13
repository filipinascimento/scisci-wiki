# Context-specific SciSci prediction data

## Summary

Context-specific SciSci prediction data are richer, more timely, or more situated data sources that may improve science-of-science prediction beyond generic bibliometric indicators.

## Canonical Form

- Unit of analysis: paper content, preprint, workshop, research-team communication, rejected manuscript, grant proposal, peer-review report, social-media trace, or prediction task.
- Typical representation: multimodal data layer joined to publications, careers, proposals, institutions, fields, and outcomes.
- Mechanism or measurement target: earlier or more direct signals about research content, evaluation, collaboration, and field movement.
- Empirical signature: prediction improves when task-relevant context is added beyond citations, publication counts, prizes, and career movements.

## Uses in Science of Science

- Supplies candidate inputs for [scientific discovery prediction](../methods/scientific_discovery_prediction.md) and [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md).
- Addresses [lagging-indicator prediction limits](../validations/lagging_indicator_prediction_limits.md) by adding sources closer to ongoing research activity.
- Extends baseline [predictive bibliographic platform traces](predictive_bibliographic_platform_traces.md) with higher-context but often more sensitive signals.
- Connects [semantic embeddings](../representations/semantic_embeddings.md), [citation contexts and functions](../representations/citation_contexts.md), [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md), and [altmetrics](altmetrics.md).
- Provides a data-governance layer for prediction models that may influence funding, publication, hiring, or field investment.

## Operationalization

- Identify prediction targets first, then collect data sources whose timestamps precede the forecast horizon.
- Candidate inputs include paper full text, preprints, workshop participation, team communication, rejected manuscripts, rejected grant proposals, peer-review reports, and social media.
- Preserve privacy, consent, access restrictions, provenance, and versioning.
- Compare incremental predictive value and subgroup calibration against simpler bibliometric baselines.

## Evidence and Validations

- Verified full-text evidence from Clauset, Larremore, and Sinatra (2017) asks whether more accurate predictions require timely or context-specific data on scientists' work.
- The paper lists candidate sources including paper content, preprint repositories, scientific workshops, research-team communication, rejected manuscripts, grant proposals and peer reviews, and social media.
- Clauset et al. contrast these sources with generic measures such as citations, publication counts, career movements, prizes, and grant funding, which they describe as crude or lagging indicators.
- These sources are proposed partly because broad platform traces may miss [novel-discovery out-of-distribution limits](../validations/novel_discovery_out_of_distribution_limit.md), although richer data do not remove the need for safeguards.
- The same paper argues that controlled experiments are needed to test causal mechanisms behind observed predictive patterns.

## Caveats

- Many context-rich sources are sensitive, private, non-public, or institutionally biased.
- More data can increase prediction accuracy while worsening surveillance, inequality, or gaming.
- Access restrictions can make models difficult to audit or reproduce.

## Links

- [scientific discovery prediction](../methods/scientific_discovery_prediction.md)
- [SciSci prediction domain map](../methods/scisci_prediction_domain_map.md)
- [lagging-indicator prediction limits](../validations/lagging_indicator_prediction_limits.md)
- [predictive bibliographic platform traces](predictive_bibliographic_platform_traces.md)
- [novel-discovery out-of-distribution limit](../validations/novel_discovery_out_of_distribution_limit.md)
- [automated predictive-evaluation safeguards](../validations/automated_predictive_evaluation_safeguards.md)
- [semantic embeddings](../representations/semantic_embeddings.md)
- [citation contexts and functions](../representations/citation_contexts.md)
- [altmetrics](altmetrics.md)
- [open access status](open_access_status.md)
- [peer review and gatekeeping](../mechanisms/peer_review_gatekeeping.md)
- [grant-publication linkage tables](grant_publication_linkage_tables.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Clauset, A., Larremore, D. B., & Sinatra, R. (2017). Data-driven predictions in the science of science. *Science*, 355(6324), 477-480. https://doi.org/10.1126/science.aal4217 [OpenAlex: W2585057539; Dimensions: pub.1083524092; WoS: unknown]

## Metadata

- Concept ID: `context_specific_scisci_prediction_data`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Clauset et al. (2017) (2017)
- Latest seen paper: Clauset et al. (2017) (2017)
- Primary reference DOI: `10.1126/science.aal4217`
- OpenAlex ID: `W2585057539`
- Dimensions ID: `pub.1083524092`
- SciSciNet ID: `W2585057539`
- Aliases: context-rich prediction data; timely SciSci prediction data; rejected-proposal prediction data; preprint and peer-review prediction signals
