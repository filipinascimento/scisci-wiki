# Sleeping-beauty short-window bias

## Summary

Sleeping-beauty short-window bias is the failure mode where short citation windows miss papers that become highly influential only after a long dormant period.

## Canonical Form

- Unit of analysis: paper, evaluation window, citation trajectory, delayed-recognition candidate, or indicator audit.
- Typical representation: awakening time compared with citation-window length, early-versus-late citation rank, or long-sleep false-negative rate.
- Validation target: test whether a citation indicator is too early to capture delayed recognition.
- Empirical signature: high-B papers would appear low impact under standard early citation windows.

## Uses in Science of Science

- Validates and stress-tests [citation window selection](../methods/citation_window_selection.md).
- Extends [novelty short-window undercount](novelty_short_window_undercount.md) to delayed-recognition trajectories that may not be measured by novelty alone.
- Supports [responsible metrics](../measures/responsible_metrics.md) by showing why early citation counts are incomplete evidence of long-term value.

## Operationalization

- Compute delayed-recognition measures such as [beauty coefficient](../measures/beauty_coefficient.md) and [awakening time](../measures/awakening_time.md).
- Compare awakening times against common citation windows used in evaluation.
- Count how many high-B papers awaken after the evaluation window.
- Report field and publication-year sensitivity, because delayed recognition is easier to observe for older cohorts.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) reports that many sleeping beauties become highly influential more than 50 years after publication.
- The paper states that this horizon is far longer than typical time windows for measuring citation impact.
- Ke et al. frame the result as empirical evidence against using short-term citation metrics to quantify scientific impact.

## Caveats

- The existence of sleeping beauties does not mean every evaluation should wait decades; it means short windows need uncertainty, exceptions, and complementary evidence.
- Very long windows can overfavor older literature and cannot evaluate recent work directly.
- Some late citation bursts may be driven by fashion, reviews, or database changes rather than durable epistemic value.

## Links

- [citation window selection](../methods/citation_window_selection.md)
- [citation impact indicators](../measures/citation_impact_indicators.md)
- [beauty coefficient](../measures/beauty_coefficient.md)
- [awakening time](../measures/awakening_time.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [novelty short-window undercount](novelty_short_window_undercount.md)
- [citation tail maturation bias](citation_tail_maturation_bias.md)
- [responsible metrics](../measures/responsible_metrics.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `sleeping_beauty_short_window_bias`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: delayed-recognition citation-window bias; sleeping-beauty impact-window bias; long-sleep metric false negative; short-window SB undercount
