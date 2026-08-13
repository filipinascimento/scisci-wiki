# Citation-history reference line

## Summary

The citation-history reference line is a geometric baseline connecting a paper's publication-year citations to its maximum annual citation point, used to score delayed recognition.

## Canonical Form

- Unit of analysis: paper citation trajectory, publication year, maximum annual citation year, or annual citation count.
- Typical representation: annual citation curve plus a straight reference line in the time-citation plane.
- Representation target: quantify how far a paper's observed citation history falls below a simple path to its eventual peak.
- Empirical signature: larger gaps between the citation curve and the reference line before the peak indicate stronger sleeping-beauty behavior.

## Uses in Science of Science

- Provides the geometric substrate for [beauty coefficient](../measures/beauty_coefficient.md) and [awakening time](../measures/awakening_time.md).
- Makes [sleeping-beauty detection](../methods/sleeping_beauty_detection.md) inspectable as a trajectory comparison rather than only a threshold rule.
- Links citation time series to [citation trajectory models](../methods/citation_trajectory_models.md).

## Operationalization

- For a paper, compute annual citations from publication through an observation year.
- Identify the age of maximum annual citations and the citation count at that maximum.
- Draw a straight line from publication-year citations to the maximum-citation point.
- Compare each pre-maximum annual citation count with the line; for awakening time, identify the point with maximum distance from the line.
- For the beauty coefficient, sum normalized pre-maximum gaps between the line and observed citation history.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) defines the beauty coefficient using a straight line between publication-year citations and the annual citation maximum.
- The paper defines awakening time as the age at which the distance from the observed citation point to the reference line is maximal.
- Ke et al. emphasize that the measure examines how the citation curve reaches its peak, not how it decays after the peak.

## Caveats

- The representation depends on observing the true maximum annual citation point; recent papers can be right-censored.
- A straight line is a diagnostic baseline, not a model of expected citations in every field.
- Differences in field citation density and database coverage can affect the magnitude of gaps.

## Links

- [beauty coefficient](../measures/beauty_coefficient.md)
- [awakening time](../measures/awakening_time.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [citation aging and obsolescence](../mechanisms/citation_aging_obsolescence.md)
- [continuous delayed-recognition spectrum](../mechanisms/continuous_delayed_recognition_spectrum.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]

## Metadata

- Concept ID: `citation_history_reference_line`
- Category: `representations`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: sleeping-beauty reference line; citation peak baseline; B-index reference line; citation trajectory line baseline
