# Top-cited scientist status

## Summary

Top-cited scientist status marks whether an author belongs to a high-citation percentile within a discipline and year.

## Canonical Form

- Unit of analysis: author-year, discipline-year, citation distribution, or career stage.
- Typical representation: binary top-scientist indicator, percentile rank, or persistent top-status trajectory.
- Measurement target: field-normalized elite citation position among active authors.
- Empirical signature: an author is classified as top-cited when their citation count places them in the chosen top percentile for the discipline-year.

## Uses in Science of Science

- Defines elite collaborator exposure for [coauthor prestige exposure](coauthor_prestige_exposure.md).
- Supports [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md) by distinguishing top coauthors from other collaborators.
- Provides a career-level analogue to paper-level [hit-paper probability](hit_paper_probability.md) and [top-percentile publication share](top_percentile_publication_share.md).
- Can be used as either a treatment exposure, a later career outcome, or a stratification variable.

## Operationalization

- Build author citation totals within a discipline and year.
- Rank authors against same-discipline peers and mark the top percentile threshold, such as top 5%.
- Decide whether status is recomputed yearly, frozen after first attainment, or treated as persistent after entry.
- Document the citation window, author disambiguation method, and handling of coauthored papers.
- Test whether the threshold is stable enough to support top-status classifications.

## Evidence and Validations

- Verified full-text evidence from Li, Aste, Caccioli, and Livan (2019) defines a top scientist in a given year as an author in the top 5% of cited authors in that discipline for the same year.
- Li et al. report that this threshold is stable in their data: in more than 95% of cases, once a researcher becomes a top scientist, she remains one until the end of her career.
- The paper uses top-cited scientist status both to define early top-coauthor exposure and to define whether a junior researcher becomes a top scientist in the 20th career year.

## Caveats

- Citation percentile status is sensitive to author disambiguation, field boundaries, citation database coverage, and citation-window choice.
- High-citation status is a visibility proxy, not a direct measure of mentoring quality or scientific merit.
- A fixed top-percentile threshold can hide large differences within the elite tail.

## Links

- [coauthor prestige exposure](coauthor_prestige_exposure.md)
- [early-career sponsorship by top scientists](../mechanisms/early_career_sponsorship.md)
- [four-discipline long-lived career panel](../datasets/four_discipline_long_lived_career_panel.md)
- [repeated top-coauthor access](../mechanisms/repeated_top_coauthor_access.md)
- [top-coauthor regression predictor](../validations/top_coauthor_regression_predictor.md)
- [field-subfield author percentile ranks](field_subfield_author_percentile_ranks.md)
- [hit-paper probability](hit_paper_probability.md)
- [top-percentile publication share](top_percentile_publication_share.md)
- [author name disambiguation](../methods/author_name_disambiguation.md)

## References

- Li, W., Aste, T., Caccioli, F., & Livan, G. (2019). Early coauthorship with top scientists predicts success in academic careers. *Nature Communications*, 10, 5170. https://doi.org/10.1038/s41467-019-13130-4 [OpenAlex: W2949684159; Dimensions: pub.1122584827; WoS: unknown]

## Metadata

- Concept ID: `top_cited_scientist_status`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Li et al. (2019) (2019)
- Latest seen paper: Li et al. (2019) (2019)
- Primary reference DOI: `10.1038/s41467-019-13130-4`
- OpenAlex ID: `W2949684159`
- Dimensions ID: `pub.1122584827`
- SciSciNet ID: `W2949684159`
- Aliases: top scientist indicator; top 5 percent cited author; elite author status; top-cited author status
