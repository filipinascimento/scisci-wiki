# Awakening time

## Summary

Awakening time is the estimated point in a citation history when a previously low-attention paper begins its delayed-recognition transition.

## Canonical Form

- Unit of analysis: paper, citation time series, delayed-recognition candidate, or sleeping-beauty case.
- Typical representation: publication year, annual citation counts, reference line, and estimated awakening year.
- Mechanism or measurement target: timing of the shift from citation sleep to rising attention.
- Empirical signature: the citation curve departs most strongly from its pre-maximum reference trajectory before the later citation peak.

## Uses in Science of Science

- Turns [sleeping beauty](../mechanisms/sleeping_beauty.md) cases into timed events that can be linked to field emergence, rediscovery, or new applications.
- Helps inspect trigger mechanisms by comparing citing papers and topics before and after awakening.
- Complements the [beauty coefficient](beauty_coefficient.md), which scores delayed-recognition intensity but does not by itself explain the triggering event.
- Supports [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md) by marking the pre/post transition for citing-field analysis.

## Operationalization

- Build annual citation counts for each paper across a sufficiently long observation window.
- Identify the year of maximum annual citations used in the sleeping-beauty trajectory.
- Draw the reference line from publication-year citations to the maximum-citation point.
- Estimate awakening time as the year where the observed citation point has the maximum distance from that reference line.
- Compare pre- and post-awakening citing papers, keywords, fields, or co-citation neighborhoods.

## Evidence and Validations

- Verified full-text evidence from Ke et al. (2015) defines awakening time as the year when the abrupt change in citation accumulation occurs for sleeping beauties.
- Ke et al. operationalize awakening time as the point where the distance between the citation trajectory and the reference line reaches its maximum.
- The paper uses awakening time to motivate trigger analysis, including co-citation and keyword comparisons before and after awakening.
- Ke et al. use Garfield's citation-index paper and Zachary's karate-club paper as examples where post-awakening citation contexts reveal new communities and topics.
- Verified full-text evidence from van Raan (2004) provides the earlier threshold framing of an awakening period after a defined sleep interval.

## Caveats

- Awakening time is not necessarily the date of the underlying discovery, rediscovery, or field change; citation response can lag those events.
- Recent papers are vulnerable to right-censoring because the future citation maximum may not yet be observed.
- A burst can reflect review articles, database changes, or field fashion as well as substantive delayed recognition.

## Links

- [sleeping beauty](../mechanisms/sleeping_beauty.md)
- [beauty coefficient](beauty_coefficient.md)
- [citation-history reference line](../representations/citation_history_reference_line.md)
- [cross-disciplinary awakening](../mechanisms/cross_disciplinary_awakening.md)
- [sleep depth and length](sleep_depth_length.md)
- [awakening intensity](awakening_intensity.md)
- [sleeping-beauty detection](../methods/sleeping_beauty_detection.md)
- [delayed recognition](../mechanisms/delayed_recognition.md)
- [citation trajectory models](../methods/citation_trajectory_models.md)
- [research fronts](../mechanisms/research_fronts.md)
- [field emergence](../mechanisms/field_emergence.md)

## References

- Ke, Q., Ferrara, E., Radicchi, F., & Flammini, A. (2015). Defining and identifying sleeping beauties in science. *Proceedings of the National Academy of Sciences*, 112(24), 7426-7431. https://doi.org/10.1073/pnas.1424329112 [OpenAlex: W2171817276; Dimensions: pub.1047813258; WoS: unknown]
- van Raan, A. F. J. (2004). Sleeping beauties in science. *Scientometrics*, 59(3), 461-466. https://doi.org/10.1023/B:SCIE.0000018543.82441.F1 [OpenAlex: W2159299749; Dimensions: pub.1032191939; WoS: unknown]

## Metadata

- Concept ID: `awakening_time`
- Category: `measures`
- Status: `full_text_seed`
- First seen paper: Ke et al. (2015) (2015)
- Latest seen paper: Ke et al. (2015) (2015)
- Primary reference DOI: `10.1073/pnas.1424329112`
- OpenAlex ID: `W2171817276`
- Dimensions ID: `pub.1047813258`
- SciSciNet ID: `W2171817276`
- Aliases: awakening year; citation awakening time; delayed-recognition transition year; SB awakening
