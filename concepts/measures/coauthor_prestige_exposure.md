# Coauthor prestige exposure

## Summary

Coauthor prestige exposure measures whether and how strongly a junior scientist is connected to highly cited, high-status, or otherwise elite collaborators early in their career.

## Canonical Form

- Unit of analysis: junior scientist, coauthor tie, early-career window, paper, field, institution, or later career outcome.
- Typical representation: binary top-coauthor indicator, number of unique top coauthors, top-coauthor events per paper, or coauthor-status-weighted exposure score.
- Measurement target: early access to high-status collaboration networks and the visibility or sponsorship those ties may provide.
- Empirical signature: junior scientists with early top-coauthor exposure differ in later collaboration opportunities and impact from matched peers without such exposure.

## Uses in Science of Science

- Provides the measurement layer for [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md).
- Links [coauthorship networks](../representations/coauthorship_networks.md) to [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md), [scientific career impact](../mechanisms/scientific_career_impact.md), and [cumulative advantage](../mechanisms/cumulative_advantage.md).
- Helps separate early productivity and citations from social access to elite collaborators.

## Operationalization

- Define "top scientist" by field-specific citation percentile, career-year status, awards, venue status, or another documented prestige proxy.
- Choose an early-career window, such as first 3 career years, and record whether the junior scientist coauthored with at least one top scientist.
- Count unique top coauthors and repeated top-coauthor events, optionally normalized by total papers.
- Use field, cohort, institution prestige, early productivity, and early citations as comparison variables or controls.
- Make the [top-cited scientist status](top_cited_scientist_status.md) threshold and later [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md) counts explicit.

## Evidence and Validations

- Verified full-text evidence from Li et al. (2019) defines junior researchers as scientists in their first three career years and measures whether they coauthored at least one paper with a top-cited scientist during that window.
- Li et al. also use counts of different top scientists and repeated top-coauthorship events in later career years, showing that early exposure predicts continued access to top coauthors.
- The paper reports that early top-coauthor exposure remains a statistically significant predictor of long-term impact after controlling for early institutional prestige, productivity, and citations.
- Li et al. define top scientists with a discipline-year top-5%-cited threshold and validate early exposure against matched and regression-based comparisons.
- Verified full-text evidence from Sekara et al. (2018) provides a venue-specific analogue: prior non-last-author publication in a journal measures an author's exposure to that venue's senior-author publication process.
- The Sekara evidence is now split into [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md) and [venue PI experience categories](venue_pi_experience_categories.md), making venue experience distinct from collaborator prestige.

## Caveats

- Coauthor prestige exposure is not the same as mentorship, advising, or causal sponsorship.
- Top-coauthor ties can reflect selection by senior scientists, junior scientist ability, institutional access, or topic opportunity.
- Field-specific authorship conventions and author disambiguation errors can distort exposure measures.

## Links

- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [early top-coauthor dose gradient](early_top_coauthor_dose_gradient.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [top-cited scientist status](top_cited_scientist_status.md)
- [top-scientist status stability check](../validations/top_scientist_status_stability_check.md)
- [twentieth-career-year success endpoint](twentieth_career_year_success_endpoint.md)
- [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md)
- [top-coauthor regression predictor](../validations/top_coauthor_regression_predictor.md)
- [top scientist selection confound](../validations/top_scientist_selection_confound.md)
- [venue chaperone effect](../mechanisms/venue_chaperone_effect.md)
- [journal-specific author-order histories](../representations/journal_specific_author_order_histories.md)
- [venue PI experience categories](venue_pi_experience_categories.md)
- [mentorship and chaperone effects](../mechanisms/mentorship_chaperone_effects.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [scientific career impact](../mechanisms/scientific_career_impact.md)
- [institutional prestige hierarchy](../mechanisms/institutional_prestige_hierarchy.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]
- Sekara, V., Deville, P., Ahnert, S. E., Barabasi, A.-L., Sinatra, R., & Lehmann, S. (2018). The chaperone effect in scientific publishing. *Proceedings of the National Academy of Sciences*, 115(50), 12603-12607. https://doi.org/10.1073/pnas.1800471115 [OpenAlex: W2904801760; Dimensions: pub.1110510902; WoS: unknown]

## Metadata

- Concept ID: `coauthor_prestige_exposure`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Sekara et al. (2018) (2018)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Aliases: top coauthor exposure; elite collaborator exposure; coauthor status signal; prestige coauthorship
