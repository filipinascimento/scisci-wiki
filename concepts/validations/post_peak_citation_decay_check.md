# Post-peak citation decay check

## Summary

Post-peak citation decay check verifies whether a paper's annual citations have already declined after their maximum, reducing right-censoring concerns in delayed-recognition analysis.

## Canonical Form

- Unit of analysis: paper citation history, annual citation maximum, post-maximum citation rate, or database observation window.
- Typical representation: post-peak decline flag, fraction of papers with sharp post-maximum decline, or right-censoring diagnostic.
- Validation target: determine whether the observed citation peak is likely stable enough for sleeping-beauty measures.
- Empirical signature: if most papers have already declined after their maximum, the beauty-coefficient distribution is less sensitive to moving the observation window forward.

## Uses in Science of Science

- Provides a right-censoring check for [beauty coefficient](../measures/beauty_coefficient.md), [awakening time](../measures/awakening_time.md), and [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md).
- Links [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) to [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md).
- Helps decide whether recent papers should be excluded from delayed-recognition studies.

## Operationalization

- Identify each paper's maximum annual citation year within the observation window.
- Measure whether yearly citations sharply decline after that maximum.
- Recompute beauty-coefficient distributions after retaining only papers with post-maximum decline.
- Compare distributions to assess sensitivity to right-censoring.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) notes that later papers have less chance to develop long sleeping periods and sudden awakenings.
- The paper estimates that nearly 90% of papers had already experienced a drastic decline after their maximum annual citations, irrespective of B value.
- Ke et al. report that empirical beauty-coefficient distribution shapes remain essentially unchanged when considering only papers with the typical sharp post-maximum decline.

## Caveats

- Post-peak decline does not prove that no future reawakening can occur.
- Citation indexing changes, new applications, or field rediscoveries can create later secondary peaks.
- The diagnostic is dataset- and extraction-date-specific.

## Links

- [beauty coefficient](../measures/beauty_coefficient.md)
- [awakening time](../measures/awakening_time.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation window selection](../methods/citation_window_selection.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `post_peak_citation_decay_check`
- Category: `validations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: post-maximum citation decline check; right-censoring citation peak check; citation peak stability check; post-peak decay diagnostic
