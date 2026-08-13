# Four-discipline long-lived career panel

## Summary

The four-discipline long-lived career panel is a Web of Science author-career dataset covering long-running careers in Cell Biology, Chemistry, Neuroscience, and Physics.

## Canonical Form

- Unit of analysis: author, career year, publication, citation, discipline, journal set, affiliation, or top-scientist status.
- Typical representation: author-disambiguated publication and citation histories with discipline-specific journal coverage.
- Data target: long observation windows that support early-career exposure and 20-year career outcome comparisons.
- Empirical signature: researchers have at least 20-year careers, at least ten publications, regular publication activity, and observed early-career and later-career citation outcomes.

## Uses in Science of Science

- Supplies the empirical base for [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md) and [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md).
- Connects [coauthorship networks](../representations/coauthorship_networks.md) to long-run [scientific career impact dynamics](../mechanisms/scientific_career_impact.md).
- Enables matched comparisons between junior researchers with and without early top-scientist coauthorship.
- Provides a career-panel analogue to [highly cited scientist career panels](highly_cited_scientist_career_panel.md), but with treatment/control construction around early collaboration exposure.

## Operationalization

- Collect Web of Science publication and citation data for selected journals in Cell Biology, Chemistry, Neuroscience, and Physics.
- Keep standard articles and review articles and disambiguate author names.
- Restrict the focal career sample to authors whose careers start in 1980-1998, last at least 20 years, have at least ten publications, and include at least one publication every five years.
- Mark first publication year, first-three-year junior window, institutional prestige exposure, early productivity, early citations, early top-coauthor exposure, and 20th-career-year outcomes.
- Preserve discipline-specific journal selection and author-disambiguation assumptions.

## Evidence and Validations

- Verified full-text evidence from Li, Aste, Caccioli, and Livan (2019) constructs publication and citation data for four Web of Science disciplines.
- The paper reports 226,362 papers and 71,794 authors in Cell Biology, 524,639 papers and 123,513 authors in Chemistry, 395,246 papers and 102,074 authors in Neuroscience, and 412,063 papers and 80,218 authors in Physics after broad data construction filters.
- The long-lived focal pool contains 22,601 researchers whose careers started between 1980 and 1998, lasted at least 20 years, had at least ten publications, and included regular publication activity.
- Li et al. use this panel to compare junior researchers with and without early coauthorship with top-cited scientists.

## Caveats

- The panel is limited to selected journal sets in four disciplines and is not a full-coverage author universe.
- Requiring long-lived careers creates survivorship bias and excludes early exits.
- Author disambiguation and name changes can affect career histories and collaboration exposure.
- The panel cannot identify top-scientist coauthorship across disciplines outside the constructed discipline-specific data.

## Links

- [Web of Science](web_of_science.md)
- [coauthorship networks](../representations/coauthorship_networks.md)
- [coauthor prestige exposure](../measures/coauthor_prestige_exposure.md)
- [top-cited scientist status](../measures/top_cited_scientist_status.md)
- [Nature Index institutional prestige score](../measures/nature_index_institutional_prestige_score.md)
- [early-career excellence strata](../representations/early_career_excellence_strata.md)
- [matched career counterfactuals](../methods/matched_career_counterfactuals.md)
- [scientific career impact dynamics](../mechanisms/scientific_career_impact.md)
- [highly cited scientist career panel](highly_cited_scientist_career_panel.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `four_discipline_long_lived_career_panel`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: four-discipline career panel; long-lived scientist career cohort; Li top-coauthor career panel; Cell Biology Chemistry Neuroscience Physics career panel
