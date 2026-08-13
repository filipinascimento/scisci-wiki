# Cited-by-big-hit indicator

## Summary

The cited-by-big-hit indicator marks whether a focal paper is cited by a later paper that itself becomes a top-percentile citation hit.

## Canonical Form

- Unit of analysis: focal paper, citing paper, subject category, publication year, citation window, or evaluation portfolio.
- Typical representation: binary cited-by-hit flag, count of citing hits, share of focal papers cited by hits, or regression outcome.
- Measurement target: indirect scientific impact through influential follow-on work.
- Empirical signature: some papers contribute to later high-impact papers even when their own direct citations are delayed or modest.

## Uses in Science of Science

- Gives a measure-level counterpart to [novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md).
- Complements direct [citation percentile indicators](citation_percentile_indicators.md) and [novelty impact dispersion](novelty_impact_dispersion.md).
- Helps evaluate exploratory or enabling research where direct top-percentile status may lag.
- Can be paired with [dynamic big-hit window models](../methods/dynamic_big_hit_window_model.md) to compare direct and indirect timing.

## Operationalization

- Identify a focal paper cohort and all later papers that cite each focal paper.
- Define a field-year reference set for each citing paper.
- Mark citing papers that become top-percentile hits, such as top 1% cited within the same subject category and publication year.
- For each focal paper, create a binary flag for whether at least one citing paper is a hit, or count the number of citing hits.
- Restrict citing papers to years with enough follow-up time to classify their own impact reliably.
- Model the indicator against focal-paper attributes while controlling for direct citation exposure where needed.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) defines `Cited by big hits` as a focal-paper indicator for being cited by a top-1% highly cited article.
- Their citing big hits are identified within the same WoS subject category and publication year using cumulative citations up to 2013.
- The analysis restricts citing big hits to papers published from 2001 through 2009 so each citing article has at least five years of citation accumulation.
- Wang et al. report that highly novel focal papers have about twice the probability of being cited by a big-hit article compared with non-novel papers.
- The indicator reveals an indirect impact channel that can remain positive even when direct early citation windows undercount novel papers.

## Caveats

- Being cited by a big hit does not prove that the focal paper caused the later hit.
- The indicator inherits the field definition, citation-window, and percentile-threshold choices used to define the citing hit.
- Popular topics and large fields may produce more citing hits for reasons unrelated to focal-paper novelty or quality.
- Citation-context analysis is needed to distinguish foundational use from routine or perfunctory citation.

## Links

- [novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md)
- [citation percentile indicators](citation_percentile_indicators.md)
- [novelty impact dispersion](novelty_impact_dispersion.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [dynamic big-hit window model](../methods/dynamic_big_hit_window_model.md)
- [citation window selection](../methods/citation_window_selection.md)
- [field normalized citation impact](field_normalized_citation_impact.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `cited_by_big_hit_indicator`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: cited-by-big-hit flag; indirect impact indicator; follow-on hit citation outcome; downstream top-percentile citation
