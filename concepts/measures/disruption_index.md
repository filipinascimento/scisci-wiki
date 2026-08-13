# Disruption index

## Summary

The disruption index measures whether later work cites a focal paper without also citing its predecessors, suggesting redirection, or co-cites both, suggesting consolidation.

## Canonical Form

- Unit of analysis: focal paper, patent, team, field, institution, or cohort.
- Typical representation: scalar in a citation-network ego neighborhood.
- Mechanism or measurement target: displacement versus development of prior knowledge.
- Empirical signature: downstream citation patterns around focal item and its references.

## Uses in Science of Science

- Operational measure for disruption/consolidation and team-size effects.
- Used to study historical trends in science and technology.
- Useful for comparing papers and patents when reference/citation data are available.
- Depends on [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md), where later work can cite the focal item, its predecessors, or both.

## Operationalization

- Inputs: focal item references, later citing items, and whether those later items cite focal references.
- Measures: CD index variants, disruption percentile, positive/negative/neutral downstream counts.
- Common model forms: cohort-normalized disruption and regression against team/institution/topic predictors.
- Report [CD-index time windows](cd_index_time_windows.md) explicitly, because CD5, longer-window CDt, and all-citation variants can answer different questions.

## Evidence and Validations

- Funk and Owen-Smith introduced the dynamic network measure; Wu et al. and Park et al. used it at scale for papers and patents.
- Verified full-text evidence from Funk and Owen-Smith (2017): the CDt index classifies later patents by whether they cite the focal invention only, cite both the focal invention and its predecessors, or cite the predecessors without the focal invention, then summarizes whether the focal invention destabilizes or consolidates prior technological streams.
- Funk and Owen-Smith also define an impact-weighted mCDt variant, which keeps the same network logic but scales the measure by the magnitude of downstream attention.
- Their measure should be read through a [continuous disruption-consolidation scale](../methods/continuous_disruption_consolidation_scale.md): intermediate CD values are degrees of trajectory change, not just weaker category assignments.
- The distinction between `CDt` and `mCDt` also encodes [impact direction-magnitude decoupling](../validations/impact_direction_magnitude_decoupling.md), separating structural direction from future-use volume before recombining them.
- Their full-text robustness checks also separate true neutral scores from [CD-index undefined cases](../validations/cd_index_undefined_cases.md), where neither the focal patent nor its predecessors receive future citations in the selected window.
- Their patent examples provide a case-based validation layer through [patent disruption face-validity cases](../validations/patent_disruption_face_validity_cases.md), while their regressions document [patent importance measure divergence](../validations/patent_importance_measure_divergence.md) between forward citation impact and disruption.
- At the organizational level, the same measure can be aggregated into [university patent portfolio disruption](university_patent_portfolio_disruption.md).
- A residual Funk and Owen-Smith pass adds [nonpatent predecessor destabilization](../mechanisms/nonpatent_predecessor_destabilization.md), [scientific visibility destabilizing patent portfolios](../mechanisms/scientific_visibility_destabilizing_patent_portfolios.md), [portfolio disruption aggregation fit](../methods/portfolio_disruption_aggregation_fit.md), and [patent distinctiveness destabilization](../validations/patent_distinctiveness_destabilization.md) as mechanism, method, and validation refinements.
- Verified full-text evidence from Wu et al. (2019): disruption is computed from a focal work's future citation neighborhood by distinguishing later works that cite the focal work alone, both the focal work and its references, or the references without the focal work.
- Wu et al. validate the measure against several external checks, summarized in [disruption measure validation](../validations/disruption_measure_validation.md): Nobel Prize papers, expert-nominated disruptive/developing examples, review articles, explicit author-name linkage to prior work, and title/abstract language associated with disrupting versus developing work.
- The verified text shows why the index should be interpreted structurally: it captures how later work reconfigures citation attention around predecessors, not whether the focal work is intrinsically valuable.
- Verified full-text evidence from Park et al. (2023) uses CD5 to document [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md) and [high-disruption tail conservation](../mechanisms/high_disruption_tail_conservation.md) across papers and patents.

## Caveats

- Sensitive to citation windows and reference coverage.
- A high score is not automatically good, and low disruption can reflect valuable consolidation.

## Links

- [disruption consolidation](../mechanisms/disruption_consolidation.md)
- [industry lifecycle disruption sequence](../mechanisms/industry_lifecycle_disruption_sequence.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [CD-index time windows](cd_index_time_windows.md)
- [modified CD index](modified_cd_index.md)
- [continuous disruption-consolidation scale](../methods/continuous_disruption_consolidation_scale.md)
- [impact direction-magnitude decoupling](../validations/impact_direction_magnitude_decoupling.md)
- [university patent portfolio disruption](university_patent_portfolio_disruption.md)
- [PatentsView utility patent sample](../datasets/patentsview_utility_patent_sample.md)
- [patent application-year time anchor](../methods/patent_application_year_time_anchor.md)
- [patent claim-scope control](../methods/patent_claim_scope_control.md)
- [nonpatent predecessor destabilization](../mechanisms/nonpatent_predecessor_destabilization.md)
- [scientific visibility destabilizing patent portfolios](../mechanisms/scientific_visibility_destabilizing_patent_portfolios.md)
- [portfolio disruption aggregation fit](../methods/portfolio_disruption_aggregation_fit.md)
- [patent distinctiveness destabilization](../validations/patent_distinctiveness_destabilization.md)
- [CD-index undefined cases](../validations/cd_index_undefined_cases.md)
- [predecessor-count opportunity bias](../validations/predecessor_count_opportunity_bias.md)
- [cross-stream mixed CD effects](../validations/cross_stream_mixed_cd_effects.md)
- [patent disruption face-validity cases](../validations/patent_disruption_face_validity_cases.md)
- [patent importance measure divergence](../validations/patent_importance_measure_divergence.md)
- [disruptiveness decline over time](../mechanisms/disruptiveness_decline.md)
- [high-disruption tail conservation](../mechanisms/high_disruption_tail_conservation.md)
- [disruption measure validation](../validations/disruption_measure_validation.md)
- [team size disruption](../mechanisms/team_size_disruption.md)
- [knowledge-use narrowing](../mechanisms/knowledge_use_narrowing.md)
- [citation networks](../representations/citation_networks.md)
- [sciscinet v2](../datasets/sciscinet_v2.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `disruption_index`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Aliases: CD index; disruptiveness score; consolidation score
