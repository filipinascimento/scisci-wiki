# Highly cited scientist career panel

## Summary

Highly cited scientist career panel is a longitudinal author-paper-citation dataset built around selected scientists' publication portfolios and annual citation histories.

## Canonical Form

- Unit of analysis: central scientist, publication, author-year, publication-year, discipline cohort, or citation event.
- Typical representation: disambiguated career panel with paper counts, annual citation increments, cumulative citations, publication age, and rank-citation profiles.
- Data type: author-centered bibliometric career panel.
- Empirical signature: publication and citation histories can be modeled as coupled career trajectories rather than isolated paper outcomes.

## Uses in Science of Science

- Supplies the evidence base for [cumulative author reputation](../measures/cumulative_author_reputation.md) and [career growth exponents](../measures/career_growth_exponents.md).
- Enables [reputation effect citation model](../methods/reputation_effect_citation_model.md) estimation by linking annual paper citations to author reputation and paper age.
- Provides a controlled setting for [reputation citation premium](../mechanisms/reputation_citation_premium.md), because the central scientist is selected as the dominant reputation source.
- Supports split-out measures for [author rank-citation profile](../measures/author_rank_citation_profile.md), [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md), and [citation supply deflator](../methods/citation_supply_deflator.md).
- Complements broader career-impact data sources in [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).

## Operationalization

- Select central scientists by field and career cohort.
- Disambiguate each central scientist's publication portfolio.
- Track annual citations for every paper in the portfolio.
- Build variables for publication age, prior paper citations, cumulative author citations, cumulative publications, and field or discipline cohort.
- Report sample selection, name-disambiguation assumptions, citation-window coverage, and coauthor-reputation approximations.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) uses a Thomson Reuters Web of Science career dataset covering 450 highly cited scientists.
- The panel includes 83,693 articles, 7,577,084 citations, and 387,103 publication-years.
- Petersen et al. divide the panel into five cohorts: top-cited physicists, prolific physicists, assistant professors in physics, top-cited cell biologists, and top-cited pure mathematicians.
- The paper uses this panel to estimate citation-rate models, publication portfolio growth, rank-citation profiles, citation life cycles, and reputation effects.
- The same design makes the [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md) an explicit selection and interpretation caveat.

## Caveats

- Highly cited scientists are not representative of all scientists.
- Central-scientist selection can understate coauthor reputation and mentor effects.
- Web of Science coverage and author disambiguation shape the observed career histories.

## Links

- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [career growth exponents](../measures/career_growth_exponents.md)
- [citation crossover threshold](../measures/citation_crossover_threshold.md)
- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [reputation Monte Carlo career model](../methods/reputation_monte_carlo_career_model.md)
- [author rank-citation profile](../measures/author_rank_citation_profile.md)
- [citation life-cycle half-life](../measures/citation_life_cycle_half_life.md)
- [citation supply deflator](../methods/citation_supply_deflator.md)
- [central-scientist reputation approximation](../validations/central_scientist_reputation_approximation.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)
- [web of science](web_of_science.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `highly_cited_scientist_career_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: highly cited career panel; author-centered career dataset; scientist publication portfolio panel; longitudinal citation career panel
