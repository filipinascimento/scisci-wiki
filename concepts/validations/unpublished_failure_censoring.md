# Unpublished-failure censoring

## Summary

Unpublished-failure censoring is the validity problem that observed publications omit failed, abandoned, or unpublished risky projects, making research-strategy risk hard to estimate.

## Canonical Form

- Unit of analysis: attempted project, failed experiment, unpublished result, published article, strategy class, or risk estimate.
- Typical representation: missing denominator of attempted projects, publication-conditioned strategy counts, or censored failure probability.
- Validation target: whether a strategy analysis observes all attempts or only attempts that survived to publication.
- Empirical signature: riskier strategies appear less frequent and their expected returns are uncertain because failed attempts are absent from the publication record.

## Uses in Science of Science

- Bounds interpretation of [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md).
- Explains why [risky-strategy compensation test](risky_strategy_compensation_test.md) must infer rather than directly observe strategy-specific success probabilities.
- Connects strategy analysis with [failed-experiment publication value](../mechanisms/failed_experiment_publication_value.md) and [publication bias and selective reporting](../mechanisms/publication_bias_selective_reporting.md).
- Provides a data-quality warning for any science-of-science study that infers choices from published records alone.
- Links to accepted-paper-only transition studies through [accepted-publication transition denominator limit](accepted_publication_transition_denominator_limit.md).
- In knowledge-network studies, marks the gap between the published edge set and the unobserved experiment-attempt distribution.
- For trend claims, splits into [published-effort stationarity assumption](published_effort_stationarity_assumption.md), which asks whether the effort-to-publication mapping is stable enough over time.

## Operationalization

- Identify whether the dataset records attempts, submissions, proposals, failed experiments, or only published successes.
- Treat publication-conditioned strategy counts as lower bounds on attempted risky strategies.
- Use registries, grant submissions, preprints, failed-experiment archives, lab notebooks, or platform logs when available.
- Report which risk quantities are observed directly and which are inferred from bounds or assumptions.
- Compare estimates under plausible strategy-specific publication probabilities.

## Evidence and Validations

- Verified full-text evidence from Foster et al. (2015) states that links in the sample come from projects that produced a publication, so the probability that a strategy succeeds or fails is not directly observed.
- The paper notes that non-incremental strategies are prone to fail and remain unpublished and invisible to science.
- Foster et al. explicitly list the exclusion of strategies that failed to yield publishable findings as a limitation of their publication-focused design.
- The same paper suggests broader full-text corpora including research proposals as a route beyond this limitation.
- Verified full-text evidence from Rzhetsky et al. (2015) restates the problem for [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md): the observed chemical-relationship network is an imperfect sample of research effort because it is screened by experimental failure and the greater difficulty of publishing unconventional work.
- Rzhetsky et al. write that published biomedical records overwhelmingly document successful experiments and almost certainly underrepresent risky but unsuccessful choices.
- The same paper treats a more complete failure record as both a validity improvement for inferred research behavior and a way to improve [knowledge-network search efficiency](../measures/knowledge_network_search_efficiency.md).
- Rzhetsky et al. also state the stronger trend assumption: risky strategies must not become much riskier or less publishable over time if published strategy trends are to track underlying effort trends.

## Caveats

- Some unpublished projects fail for reasons unrelated to research strategy, such as resources, team disruption, ethics, or measurement error.
- Publication-conditioned data can still support useful comparisons if the censoring mechanism is acknowledged.
- Failure registries may be incomplete, sensitive, or biased toward fields with stronger reporting norms.

## Links

- [risky-strategy compensation test](risky_strategy_compensation_test.md)
- [research strategy risk-reward](../mechanisms/research_strategy_risk_reward.md)
- [project-level strategy labels](../methods/project_level_strategy_labels.md)
- [accepted-publication transition denominator limit](accepted_publication_transition_denominator_limit.md)
- [MEDLINE chemical annotation corpus](../datasets/medline_chemical_annotation_corpus.md)
- [biomedical chemical-relationship network panel](../datasets/biomedical_chemical_relationship_network_panel.md)
- [knowledge-network experiment search](../mechanisms/knowledge_network_experiment_search.md)
- [optimal knowledge-network search simulation](../methods/optimal_knowledge_network_search_simulation.md)
- [published-effort stationarity assumption](published_effort_stationarity_assumption.md)
- [failed-experiment publication value](../mechanisms/failed_experiment_publication_value.md)
- [publication bias and selective reporting](../mechanisms/publication_bias_selective_reporting.md)
- [open science interventions](open_science_interventions.md)
- [preregistration and registered reports](preregistration_registered_reports.md)

## References

- Foster, J. G., Rzhetsky, A., & Evans, J. A. (2015). Tradition and innovation in scientists' research strategies. *American Sociological Review*, 80(5), 875-908. https://doi.org/10.1177/0003122415601618 [OpenAlex: W2154053722; Dimensions: pub.1006210257; WoS: unknown]
- Rzhetsky, A., Foster, J. G., Foster, I. T., & Evans, J. A. (2015). Choosing experiments to accelerate collective discovery. *Proceedings of the National Academy of Sciences*, 112(47), 14569-14574. https://doi.org/10.1073/pnas.1509757112 [OpenAlex: W2130145803; Dimensions: pub.1026242168; SciSciNet: W2130145803; WoS: unknown]

## Metadata

- Concept ID: `unpublished_failure_censoring`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Foster et al. (2015) (2015)
- Latest seen paper: Rzhetsky et al. (2015) (2015)
- Primary reference DOI: `10.1177/0003122415601618`
- OpenAlex ID: `W2154053722`
- Dimensions ID: `pub.1006210257`
- SciSciNet ID: `W2154053722`
- Aliases: missing failed projects; publication-conditioned risk; hidden failure denominator; unpublished strategy failures
