# WoS 2001 novelty article cohort

## Summary

The WoS 2001 novelty article cohort is the all-field Web of Science article panel used by Wang, Veugelers, and Stephan to test whether bibliometric indicators underrate novel research.

## Canonical Form

- Unit of analysis: research article, subject-category observation, reference list, citation window, or cited-journal pair.
- Typical representation: filtered 2001 Web of Science article cohort with subject-category expansion and yearly citation outcomes through 2013.
- Dataset target: a cross-field cohort where novelty is measured at publication time and impact is observed over long and short windows.
- Empirical signature: original research articles with at least two WoS-journal references are linked to subject categories, journal impact factors, and annual citation counts.

## Uses in Science of Science

- Provides the empirical base for [new journal-pair novelty](../measures/new_journal_pair_novelty.md), [highly novel paper class](../measures/highly_novel_paper_class.md), and [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md).
- Supports tests of [novelty penalty](../mechanisms/novelty_penalty.md), [novelty short-window undercount](../validations/novelty_short_window_undercount.md), and [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md).
- Enables field-normalized comparison through [citation percentile indicators](../measures/citation_percentile_indicators.md).
- Gives a reusable cohort design for studying delayed recognition, indirect impact, and metric bias against exploratory work.

## Operationalization

- Start from Web of Science research articles published in 2001.
- Exclude reviews, letters, and articles with fewer than two references to WoS-indexed journals.
- Expand papers across their WoS subject categories and drop observations without subject-category assignments.
- Build cited-journal combinations from each reference list and compare them with pre-2001 historical combinations.
- Link annual citation counts, top-percentile status, journal impact factor, team and reference-list controls, and citing-paper outcomes.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) starts from all WoS research articles published in 2001 and retains 674,546 articles with at least two WoS-journal references.
- After subject-category expansion and exclusion of articles without subject categories, the analysis uses 1,056,936 article-by-subject-category observations across 251 WoS subject categories.
- Citation counts are retrieved yearly from 2001 through 2013, giving a 13-year citation window for direct impact.
- The paper restricts citing big-hit analyses to citing papers published from 2001 through 2009 so those citing papers have at least five years to accumulate citations.
- The same cohort supports journal-placement, short-window, long-window, field-robustness, and indirect-impact analyses.

## Caveats

- The cohort is anchored in 2001 and does not capture later changes in database coverage, journal structure, or citation practices.
- Subject-category expansion creates multiple observations for papers assigned to multiple fields.
- Journal-pair novelty depends on WoS journal indexing and title normalization.
- The cohort is well suited to long-run validation but not to measuring current novelty without updating the underlying data.

## Links

- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [highly novel paper class](../measures/highly_novel_paper_class.md)
- [distance-weighted new journal-pair score](../measures/distance_weighted_new_journal_pair_score.md)
- [novelty occurrence skew](../measures/novelty_occurrence_skew.md)
- [novelty penalty](../mechanisms/novelty_penalty.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [journal impact factor novelty bias](../validations/journal_impact_factor_novelty_bias.md)
- [high-JIF novelty delay interaction](../validations/high_jif_novelty_delay_interaction.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `wos_2001_novelty_article_cohort`
- Category: `datasets`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: 2001 WoS novelty cohort; Wang novelty article cohort; all-field novelty paper cohort; 2001 combinatorial novelty panel
