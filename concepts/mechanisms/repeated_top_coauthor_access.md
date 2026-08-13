# Repeated top-coauthor access

## Summary

Repeated top-coauthor access is the mechanism in which early collaboration with a top-cited scientist increases later opportunities to collaborate with top scientists again.

## Canonical Form

- Unit of analysis: junior researcher, coauthor tie, top-scientist collaborator, career window, or collaboration event.
- Typical representation: count of unique later top coauthors, repeated top-coauthor events per paper, or transition from early exposure to later elite-network access.
- Mechanism: early elite collaboration can create visibility, trust, network bridges, and cumulative access to additional elite collaborators.
- Empirical signature: matched junior researchers with early top-coauthor exposure later collaborate with more top scientists than comparable controls.

## Uses in Science of Science

- Provides a concrete mechanism inside [early-career sponsorship by top scientists](early_career_sponsorship.md).
- Connects [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md) to [cumulative advantage](cumulative_advantage.md).
- Offers a social-network path from early opportunity to later [scientific career impact dynamics](scientific_career_impact.md).
- Helps distinguish direct citations from the exposed paper from downstream collaboration-network access.

## Operationalization

- Identify junior researchers with and without early top-coauthor exposure.
- For later career years, count different top scientists coauthored with, excluding the initial top coauthors for treated researchers when measuring new access.
- Count the number of top-coauthor events, optionally normalized by later publications.
- Compare treated and control researchers matched on early institutional prestige, productivity, and citations.
- Report whether later impact persists after excluding citations to early top-coauthored papers and after separating later papers with and without top-scientist coauthors through [non-top-coauthored impact persistence](../validations/non_top_coauthored_impact_persistence.md).

## Evidence and Validations

- Verified full-text evidence from Li, Aste, Caccioli, and Livan (2019) finds that treated junior researchers later collaborate with more different top scientists and have more repeated top-coauthorship events than matched controls.
- The paper reports statistically significant treated-control differences in later unique top coauthors and later top-coauthor events across all four studied disciplines.
- Li et al. interpret this as a rich-get-richer mechanism: early top-scientist coauthorship increases the probability of doing it again and ultimately of becoming a top scientist.
- The paper also shows that later citation advantages persist when early first-three-year papers are excluded from outcome counts.

## Caveats

- Later top-coauthor access may reflect unobserved ability, topic choice, or senior-scientist selection rather than only the early tie.
- Repeated access is partly an outcome and partly a mechanism, so causal ordering should be explicit.
- The measure depends on top-scientist threshold, discipline boundaries, and author disambiguation.

## Links

- [early-career sponsorship by top scientists](early_career_sponsorship.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [non-top-coauthored impact persistence](../validations/non_top_coauthored_impact_persistence.md)
- [unique-coauthor-count matching robustness](../validations/unique_coauthor_count_matching_robustness.md)
- [top scientist selection confound](../validations/top_scientist_selection_confound.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [cumulative advantage](cumulative_advantage.md)
- [scientific career impact dynamics](scientific_career_impact.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `repeated_top_coauthor_access`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: repeated elite coauthorship; later top-coauthor access; elite collaboration recurrence; top-scientist collaboration persistence
