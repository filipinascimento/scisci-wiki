# Novelty indirect big-hit stimulation

## Summary

Novelty indirect big-hit stimulation is the mechanism in which novel papers may contribute to later high-impact work even when their own direct citation counts accumulate slowly.

## Canonical Form

- Unit of analysis: focal paper, citing paper, subject category, citation window, or top-percentile outcome.
- Typical representation: probability that a focal paper is cited by a later paper that becomes a top-1% citation hit.
- Mechanism: novel work supplies recombinations or problem framings that later papers can exploit, diffuse, or translate into more widely recognized contributions.
- Empirical signature: highly novel focal papers are more likely than non-novel papers to be cited by later big-hit papers.

## Uses in Science of Science

- Complements direct-citation measures in [novelty penalty](novelty_penalty.md) and [novelty impact dispersion](../measures/novelty_impact_dispersion.md).
- Explains why [novelty short-window undercount](../validations/novelty_short_window_undercount.md) can miss useful exploratory work.
- Uses the [cited-by-big-hit indicator](../measures/cited_by_big_hit_indicator.md) as a concrete outcome for downstream influence.
- Gives evaluators a follow-on impact channel beyond direct top-percentile status.
- Connects novelty measurement to downstream knowledge recombination and delayed recognition.

## Operationalization

- Identify focal papers and classify their novelty with [new journal-pair novelty](../measures/new_journal_pair_novelty.md).
- Identify later citing papers and classify whether each citing paper becomes a field-year top-1% citation hit.
- Restrict citing papers to publication years with enough follow-up time for outcome measurement.
- Estimate whether focal novelty predicts being cited by at least one later big hit, controlling for field, references, authors, collaboration, and related attributes.
- Compare indirect big-hit outcomes with direct citation outcomes.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) tests whether papers that cite highly novel work are themselves more likely to become big hits.
- The paper reports that highly novel papers have about twice the probability of being cited by a big-hit paper compared with non-novel papers.
- Citing big-hit analyses are restricted to papers published from 2001 through 2009 so each citing paper has at least five years to accumulate citations.
- Wang et al. interpret the result as evidence that novelty can stimulate influential follow-on work even when direct recognition is delayed.
- The indirect-impact result complements the higher variance and lower early direct-citation performance of highly novel papers.

## Caveats

- Being cited by a big hit does not prove causal contribution to that hit.
- Indirect impact can be mediated by visibility, field size, or the citing paper's own team and venue characteristics.
- The metric privileges downstream papers that become highly cited, not necessarily downstream papers that are socially or technically important.
- Citation context would be needed to distinguish foundational use from perfunctory citation.

## Links

- [novelty penalty](novelty_penalty.md)
- [new journal-pair novelty](../measures/new_journal_pair_novelty.md)
- [highly novel paper class](../measures/highly_novel_paper_class.md)
- [novelty impact dispersion](../measures/novelty_impact_dispersion.md)
- [cited-by-big-hit indicator](../measures/cited_by_big_hit_indicator.md)
- [novel research low-citation tail](../validations/novel_research_low_citation_tail.md)
- [novelty short-window undercount](../validations/novelty_short_window_undercount.md)
- [citation percentile indicators](../measures/citation_percentile_indicators.md)
- [delayed recognition and prematurity](delayed_recognition.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `novelty_indirect_big_hit_stimulation`
- Category: `mechanisms`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: indirect novelty impact; follow-on big-hit stimulation; cited-by-big-hit novelty effect; downstream novelty impact
