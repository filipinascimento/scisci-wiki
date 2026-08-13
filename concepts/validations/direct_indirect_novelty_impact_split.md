# Direct-indirect novelty impact split

## Summary

Direct-indirect novelty impact split validates novel work by separating its own direct citation trajectory from its influence on later high-impact papers.

## Canonical Form

- Unit of analysis: focal paper, direct citation count, later big-hit paper, cited-by-big-hit edge, or citation window.
- Typical representation: direct top-citation indicator, indirect big-hit stimulation indicator, lagged citation window, or split impact panel.
- Validation target: detect whether short direct citation windows understate novelty's downstream influence.
- Empirical signature: novel papers may lag in direct top-citation status while being more likely to be cited by later highly cited papers.

## Uses in Science of Science

- Provides a validation layer for [novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md).
- Uses [cited-by big-hit indicator](../measures/cited_by_big_hit_indicator.md) alongside direct citation outcomes.
- Connects [novelty short-window undercount](novelty_short_window_undercount.md), [dynamic big-hit window model](../methods/dynamic_big_hit_window_model.md), and [novelty penalty](../mechanisms/novelty_penalty.md).
- Helps evaluation systems avoid treating delayed direct recognition as lack of influence.

## Operationalization

- Measure direct citation outcomes over short and long windows.
- Define later big-hit papers using field/year-normalized citation thresholds.
- Identify whether focal papers are cited by those later big hits.
- Compare direct and indirect outcomes by novelty class.
- Report lag structure so downstream influence is not conflated with immediate attention.

## Evidence and Validations

- Verified full-text evidence from Wang, Veugelers, and Stephan (2017) shows that highly novel papers can be delayed in direct citation recognition.
- The same paper finds that novel papers are more likely to be cited by later big-hit papers, indicating an indirect influence channel.
- This split supports the claim that direct short-window citation indicators can penalize novelty.

## Caveats

- Being cited by a later big hit is not proof of causal influence.
- Big-hit thresholds depend on field, year, and citation window.
- Indirect influence measures still miss uncited conceptual uptake and hidden citations.

## Links

- [novelty penalty](../mechanisms/novelty_penalty.md)
- [novelty indirect big-hit stimulation](../mechanisms/novelty_indirect_big_hit_stimulation.md)
- [cited-by big-hit indicator](../measures/cited_by_big_hit_indicator.md)
- [dynamic big-hit window model](../methods/dynamic_big_hit_window_model.md)
- [novelty short-window undercount](novelty_short_window_undercount.md)
- [high-JIF novelty delay interaction](high_jif_novelty_delay_interaction.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- Wang, J., Veugelers, R., & Stephan, P. (2017). Bias against novelty in science: A cautionary tale for users of bibliometric indicators. *Research Policy*, 46(8), 1416-1436. https://doi.org/10.1016/j.respol.2017.06.006 [OpenAlex: W3123050710; Dimensions: pub.1090835595; WoS: unknown]

## Metadata

- Concept ID: `direct_indirect_novelty_impact_split`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Wang et al. (2017) (2017)
- Latest seen paper: Wang et al. (2017) (2017)
- Primary reference DOI: `10.1016/j.respol.2017.06.006`
- OpenAlex ID: `W3123050710`
- Dimensions ID: `pub.1090835595`
- SciSciNet ID: `W3123050710`
- Aliases: direct indirect novelty impact; novelty downstream influence split; cited-by-big-hit validation; indirect novelty recognition
