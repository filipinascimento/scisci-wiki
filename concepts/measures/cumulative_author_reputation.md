# Cumulative author reputation

## Summary

Cumulative author reputation measures a scientist's accumulated visibility or status by summing citations received across the scientist's publication portfolio up to a given time.

## Canonical Form

- Unit of analysis: scientist, author-year, publication portfolio, field cohort, or career stage.
- Typical representation: cumulative citation total Ci(t), cumulative citation trajectory, or author reputation signal.
- Measurement target: author-level visibility available before or during a paper's citation accrual.
- Empirical signature: papers by authors with larger cumulative citation histories can receive higher early citation rates, especially before the papers become highly cited themselves.

## Uses in Science of Science

- Operationalizes author reputation inside [reputation effects](../mechanisms/reputation_effects.md).
- Provides a predictor for [reputation effect citation model](../methods/reputation_effect_citation_model.md).
- Supports [reputation citation premium](../mechanisms/reputation_citation_premium.md) by comparing authors with different Ci(t).
- Links career-scale status to [cumulative advantage](../mechanisms/cumulative_advantage.md), [matthew effect](../mechanisms/matthew_effect.md), and [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Interprets cumulative citations as an [author name visibility signal](../mechanisms/author_name_visibility_signal.md), with [citation supply deflator](../methods/citation_supply_deflator.md) available for secular field-growth checks.

## Operationalization

- Construct each scientist's publication portfolio from disambiguated author records.
- For each career year, sum citations received by all papers in the portfolio up to that year.
- Use the resulting cumulative citation count as Ci(t).
- Optionally compare with annual citation rate or deflated cumulative citations to control for field growth.
- Report how coauthor reputation, mentor reputation, self-citation, and field size are handled.
- State whether the model uses a [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md) or explicitly models coauthor reputation.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) defines author reputation as Ci(t), the net citations aggregated across all publications of central scientist i.
- The paper argues that Ci(t) measures both overall scientific impact and the number of appearances of the author's name in the literature.
- Petersen et al. use Ci(t) as the author-reputation term in a citation-rate model for individual papers.
- The paper notes that Ci(t) does not directly measure intrinsic research quality and can mix visibility, productivity, collaboration, and past impact.
- Petersen et al. also test annual citation rate as a non-cumulative reputation measure in robustness analysis.
- Petersen et al. additionally deflate citation trajectories by field publication output to check whether career citation growth exceeds the expanding citation-supply baseline.

## Caveats

- Cumulative citations are non-decreasing, so they may fail to capture reputation loss after fraud, invalidation, or retraction.
- The measure conflates author status, portfolio size, field citation density, collaboration, and research quality.
- Coauthor reputation can contaminate the central author's measured signal.

## Links

- [reputation effects](../mechanisms/reputation_effects.md)
- [reputation citation premium](../mechanisms/reputation_citation_premium.md)
- [citation crossover threshold](citation_crossover_threshold.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [career growth exponents](career_growth_exponents.md)
- [author name visibility signal](../mechanisms/author_name_visibility_signal.md)
- [citation supply deflator](../methods/citation_supply_deflator.md)
- [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [matthew effect](../mechanisms/matthew_effect.md)
- [cumulative advantage](../mechanisms/cumulative_advantage.md)
- [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `cumulative_author_reputation`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: Ci(t); author reputation measure; cumulative author citations; author visibility signal
