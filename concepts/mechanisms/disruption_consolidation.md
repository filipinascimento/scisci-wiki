# Disruption and consolidation

## Summary

Disruption and consolidation distinguish work that redirects attention away from its predecessors from work that develops, extends, and consolidates existing streams.

## Canonical Form

- Unit of analysis: paper, patent, research area, team, institution, or field.
- Typical representation: citation network around a focal item and its references.
- Mechanism: disruptive work changes the downstream citation neighborhood; consolidating work reinforces predecessor lineages.
- Empirical signature: downstream papers cite the focal work without co-citing many of its references, or the reverse.

## Uses in Science of Science

- Used to compare papers, patents, team sizes, fields, and historical trends in scientific change.
- Connects technological-change measurement with science-of-science accounts of novelty, recombination, and field dynamics.
- Provides a measurable hypothesis about whether science is becoming less disruptive over time.

## Operationalization

- Compute CD/disruption index from focal paper references and downstream citations.
- Represent the citation neighborhood as [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md).
- Track by cohort year, field, team size, funding, institution, and topic.
- Validate with expert judgments, case studies, citation contexts, and sensitivity to database windows.

## Evidence and Validations

- Funk and Owen-Smith introduced the dynamic network measure for technological change; Wu et al. adapted disruption to science/technology team analysis; Park et al. measured long-run decline.
- Verified full-text evidence from Funk and Owen-Smith (2017): destabilizing inventions direct later attention toward the focal invention and away from its cited predecessors, while consolidating inventions deepen later use of the predecessor stream. Their university-commercialization analysis uses this distinction to separate frontier-shifting effects from status-quo reinforcement.
- Their introduction frames this as a [continuous disruption-consolidation scale](../methods/continuous_disruption_consolidation_scale.md) and as [competency-independent technological effects](competency_independent_technological_effects.md), because the measured network effect is not reducible to whether incumbent organizations' capabilities are enhanced or destroyed.
- The same verified full text extends the distinction into organizational mechanisms: [commercial engagement consolidation](commercial_engagement_consolidation.md) links industry ties to trajectory-reinforcing portfolios, while [federal funding destabilizing patents](federal_funding_destabilizing_patents.md) links public support to more destabilizing patent outcomes.
- Funk and Owen-Smith's [university patent portfolio disruption](../measures/university_patent_portfolio_disruption.md) measures aggregate institutional portfolios rather than single focal patents.
- Verified full-text evidence from Wu et al. (2019): high-impact work from small teams is especially disruptive, while high-impact work from large teams is especially developmental; the association persists across fields and eras in their tested data.
- Wu et al. explicitly separate disruption from citation impact: larger teams can receive more immediate attention while still developing existing directions, whereas smaller teams can have delayed recognition while opening new directions.
- Verified full-text evidence from Park et al. (2023) links declining disruptiveness to [knowledge-use narrowing](knowledge_use_narrowing.md): papers and patents increasingly rely on narrower portions of prior knowledge.
- Park et al. also show that average [disruptiveness decline over time](disruptiveness_decline.md) can coexist with [high-disruption tail conservation](high_disruption_tail_conservation.md), so disruption/consolidation should be analyzed as both a share and an absolute-count phenomenon.
- Fortunato et al. (2018) uses the team-size result as part of the broader science-of-science argument that data-driven models can inform policies for balancing frontier expansion and development.

## Caveats

- Disruption is not identical to quality, usefulness, or novelty.
- The measure is sensitive to citation windows, reference coverage, field norms, and database completeness.

## Links

- [disruption index](../measures/disruption_index.md)
- [focal-predecessor-future citation triads](../representations/focal_predecessor_future_citation_triads.md)
- [CD-index time windows](../measures/cd_index_time_windows.md)
- [modified CD index](../measures/modified_cd_index.md)
- [continuous disruption-consolidation scale](../methods/continuous_disruption_consolidation_scale.md)
- [competency-independent technological effects](competency_independent_technological_effects.md)
- [university patent portfolio disruption](../measures/university_patent_portfolio_disruption.md)
- [commercial engagement consolidation](commercial_engagement_consolidation.md)
- [federal funding destabilizing patents](federal_funding_destabilizing_patents.md)
- [disruptiveness decline over time](disruptiveness_decline.md)
- [high-disruption tail conservation](high_disruption_tail_conservation.md)
- [disruption measure validation](../validations/disruption_measure_validation.md)
- [team size disruption](../mechanisms/team_size_disruption.md)
- [knowledge-use narrowing](knowledge_use_narrowing.md)
- [novelty conventionality](../mechanisms/novelty_conventionality.md)
- [citation networks](../representations/citation_networks.md)

## References

- Funk, R. J., & Owen-Smith, J. (2017). A dynamic network measure of technological change. *Management Science*, 63(3), 791-817. https://doi.org/10.1287/mnsc.2015.2366 [OpenAlex: W2303284028; Dimensions: pub.1064718099; WoS: unknown]
- Wu, L., Wang, D., & Evans, J. A. (2019). Large teams develop and small teams disrupt science and technology. *Nature*, 566, 378-382. https://doi.org/10.1038/s41586-019-0941-9 [OpenAlex: W2913773162; Dimensions: pub.1112085796; WoS: unknown]
- Park, M., Leahey, E., & Funk, R. J. (2023). Papers and patents are becoming less disruptive over time. *Nature*, 613, 138-144. https://doi.org/10.1038/s41586-022-05543-x [OpenAlex: W4313545395; Dimensions: pub.1154226028; WoS: unknown]

## Metadata

- Concept ID: `disruption_consolidation`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Funk and Owen-Smith (2017) (2017)
- Latest seen paper: Park et al. (2023) (2023)
- Primary reference DOI: `10.1287/mnsc.2015.2366`
- OpenAlex ID: `W2303284028`
- Aliases: CD index; disruptive science; developmental science
