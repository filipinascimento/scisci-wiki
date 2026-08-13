# Central-scientist reputation approximation

## Summary

Central-scientist reputation approximation treats one focal scientist's cumulative citation history as the dominant author-reputation signal for papers in that scientist's publication portfolio.

## Canonical Form

- Unit of analysis: focal scientist, coauthored paper, author portfolio, career-year, or citation-rate model.
- Typical representation: central author's cumulative citations used as a proxy for the total reputation attached to a multi-author paper.
- Validation target: determine whether an author-level reputation effect is robust when coauthor reputation is simplified or omitted.
- Empirical signature: reputation estimates are interpreted as upper-bound or focal-author estimates rather than fully separated coauthor effects.

## Uses in Science of Science

- Documents an identification assumption behind [reputation effect citation models](../methods/reputation_effect_citation_model.md).
- Connects the [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md) to model caveats about coauthor, mentor, and team status.
- Helps separate focal-author visibility from [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md) and [top scientist selection confound](top_scientist_selection_confound.md).
- Provides a reusable caveat for studies that use celebrity, elite, or top-cited scientists as the central unit.

## Operationalization

- Select focal scientists whose publication portfolios are expected to dominate the relevant reputation signal.
- Compute focal-author cumulative citations before each focal paper-year.
- State whether coauthor cumulative citations, mentor status, institutional prestige, and journal reputation are controlled, ignored, or treated as residual confounds.
- Re-estimate with coauthor-reputation controls or author fixed effects when metadata allow it.
- Interpret effects as focal-author or upper-bound reputation effects when coauthor signals cannot be separated.

## Evidence and Validations

- Verified full-text evidence from Petersen et al. (2014) limits the analysis to top scientists and assumes the central scientist captures most of the reputation signal attached to the focal publication portfolio.
- The paper approximates total reputation across coauthors with the central scientist's reputation because the focal scientists are highly visible.
- Petersen et al. describe the resulting estimate as an upper-bound style approach and note that it may discount mentor reputation in early-career work.
- The same caveat motivates later designs that explicitly model coauthor prestige, mentor status, or institution reputation.

## Caveats

- The approximation can overstate focal-author reputation if coauthors, institutions, journals, or mentors are the real source of visibility.
- It can understate early-career mentor or lab effects when the focal scientist was not yet independently known.
- It is best treated as a design assumption to be stress-tested, not as a universal property of coauthored work.

## Links

- [reputation effect citation model](../methods/reputation_effect_citation_model.md)
- [reputation effects](../mechanisms/reputation_effects.md)
- [cumulative author reputation](../measures/cumulative_author_reputation.md)
- [author name visibility signal](../mechanisms/author_name_visibility_signal.md)
- [highly cited scientist career panel](../datasets/highly_cited_scientist_career_panel.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [top scientist selection confound](top_scientist_selection_confound.md)
- [early-career sponsorship](../mechanisms/early_career_sponsorship.md)

## References

- Petersen, A. M., Fortunato, S., Pan, R. K., Kaski, K., Penner, O., Rungi, A., Riccaboni, M., Stanley, H. E., & Pammolli, F. (2014). Reputation and impact in academic careers. *Proceedings of the National Academy of Sciences*, 111(43), 15316-15321. https://doi.org/10.1073/pnas.1323111111 [OpenAlex: W2152513188; Dimensions: pub.1035836589; WoS: unknown]

## Metadata

- Concept ID: `central_scientist_reputation_approximation`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Petersen et al. (2014) (2014)
- Latest seen paper: Petersen et al. (2014) (2014)
- Primary reference DOI: `10.1073/pnas.1323111111`
- OpenAlex ID: `W2152513188`
- Dimensions ID: `pub.1035836589`
- SciSciNet ID: `W2152513188`
- Aliases: focal-author reputation proxy; central author approximation; coauthor reputation simplification; focal scientist reputation assumption
